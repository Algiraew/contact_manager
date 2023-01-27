import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  contacts: [],
  error: null,
  loading: false,
};

export const getContacts = createAsyncThunk(
  "contacts/get",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/contacts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const contacts = await res.json();
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getContact = createAsyncThunk(
  "contact/get",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/contact/${id}`);
      const contact = await res.json();
      return contact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createContact = createAsyncThunk(
  "contact/post",
  async (data, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const contact = await res.json();
      return contact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateContact = createAsyncThunk(
  "contact/update",
  async (data, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/contact/${data.id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const contact = await res.json();
      return contact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contact/delete",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/contact/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
          state.contacts = action.payload;
          state.loading = false;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
    builder
      .addCase(getContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload;
      })
      .addCase(getContact.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
    builder
      .addCase(createContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action);
        state.contacts = state.contacts.push(action.payload);
      })
      .addCase(createContact.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
    builder
      .addCase(updateContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.loading = false;
        // state.contacts = action.payload;
        console.log(action);
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
    builder
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = state.contacts.filter(
          (contact) => contact._id !== action.payload
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default contactsSlice.reducer;
