import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getContacts,
  deleteContact,
  createContact,
} from "../features/contact.slice";
import styles from "./contacts.module.css";
const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const loading = useSelector((state) => state.contacts.loading);

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  if (!contacts.length) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Link to="/create">Добавить Контакт</Link>
      <div className={styles.main}>
        {contacts.map((contact) => {
          return (
            <div key={contact._id} className={styles.main_cont}>
              <Link to={contact._id}>
                <div className={styles.container}>
                  <p className={styles.cont_item}>{contact.FirstName}</p>
                  <p className={styles.cont_item}>{contact.LastName}</p>
                  <p className={styles.cont_item}>{contact.Phone}</p>
                </div>
              </Link>
              <button className={styles.btn_del}>Удалить контакт</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Contacts;
