import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "../features/contact.slice";

const store = configureStore({
  reducer: {
    contacts: contactSlice,
  },
});

export default store;
