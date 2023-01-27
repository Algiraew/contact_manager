import React from "react";
import styles from "../components/contactEdit.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateContact } from "../features/contact.slice";

const ContactEdit = ({ setEdit, contact, id }) => {
  const dispatch = useDispatch();


  const [FirstName, setFirstName] = useState(contact.FirstName);
  const [LastName, setLastName] = useState(contact.LastName);
  const [Phone, setPhone] = useState(contact.Phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateContact({FirstName, LastName, Phone, id}))

  };
  const handleChangeName = (e) => {
    setFirstName(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };


  console.log(FirstName);
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <input
          defaultValue={contact.FirstName} 
          onChange={(e) => handleChangeName(e)}
          type="text"
        />
      </div>
      <div>
        <input
          defaultValue={contact.LastName} 
          onChange={(e) => handleChangeLastName(e)}
          type="text"
        />
      </div>
      <div>
        <input
          defaultValue={contact.Phone}
          onChange={(e) => handleChangePhone(e)}
          type="number"
        />
      </div>
      <button>Изменить</button>
      <button onClick={() => setEdit(false)}>Отменить</button>
    </form>
  );
};

export default ContactEdit;
