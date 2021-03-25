import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import transition from "./transition.module.css";
export default class ContactList extends React.Component {
  static propTypes = {
    deleteFunction: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
  };
  render() {
    const { deleteFunction, list } = this.props;
    return (
      <TransitionGroup component="ul" className={styles.list}>
        {list.map((contact) => (
          <CSSTransition key={contact.id} classNames={transition} timeout={250}>
            <ContactItem deleteFunction={deleteFunction} contact={contact} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}
