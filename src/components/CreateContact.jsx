import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createContact } from "../features/contact.slice";
import styles from "../components/createcontact.css";

const CreateContact = () => {
  const dispatch = useDispatch();
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Phone, setPhone] = useState(0);

  const handleChangeName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLast = (e) => {
    setLastName(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setPhone("");
    dispatch(
      createContact({
        FirstName,
        LastName,
        Phone,
      })
    );
  };

  return (
    <div className={styles.main}>
      <h1>Добавление Контакта</h1>
      <form>
        <div>
          <input value={FirstName} type="text" onChange={handleChangeName} />
        </div>
        <div>
          <input value={LastName} type="text" onChange={handleChangeLast} />
        </div>
        <div>
          <input value={Phone} type="number" onChange={handleChangePhone} />
        </div>
        <button className={styles.btn_add} onClick={(e) => handleAdd(e)}>
          Добавить
        </button>
      </form>
    </div>
  );
};

export default CreateContact;
