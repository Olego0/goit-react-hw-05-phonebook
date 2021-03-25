import React from "react";
import styles from "./ContactItem.module.css";
import PropTypes from "prop-types";
function ContactItem({ deleteFunction, contact }) {
  return (
      <li className={styles.li}>
        <p>{contact.name}</p>
        <div className={styles.subWrapper}>
          <p className={styles.number}>{contact.number}</p>
          <button
            type="button"
            onClick={() => deleteFunction(contact.id)}
            className={styles.btn}
          >
            X
          </button>
        </div>
      </li>
  );
}
export default ContactItem;

ContactItem.propTypes = {
  deleteFunction: PropTypes.func.isRequired,
  contact: PropTypes.object.isRequired,
};
