import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact, updateContact } from "../features/contact.slice";
import { useParams } from "react-router-dom";
import styles from "../components/contactUpdate.css";
import { Link } from "react-router-dom";
import ContactEdit from "./ContactEdit";

const ContactUpdate = () => {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contacts.contacts);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getContact(id));
  }, [dispatch, id]);

  const handleUpdate = (e) => {
   setEdit(true)
  };

  return edit ? (
    <ContactEdit contact={contact} setEdit={setEdit} id={id}/>
  ) : (
    <div className={styles.contact_item}>
      <div className={styles.container}>
        <p className={styles.cont_item}>{contact.FirstName}</p>
        <p className={styles.cont_item}>{contact.LastName}</p>
        <p className={styles.cont_item}>{contact.Phone}</p>
        <button
          className={styles.btn_del}
          onClick={handleUpdate}
        >
          Изменить данные
        </button>
      </div>
    </div>
  );
};

export default ContactUpdate;
