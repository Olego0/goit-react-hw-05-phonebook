import React from "react";
import styles from "./Alert.module.css";
import { CSSTransition } from "react-transition-group";
import transition from "./transition.module.css";
import PropTypes from "prop-types";
const Alert = ({ alert }) => {
  return (
    <CSSTransition in={alert} classNames={transition} timeout={250}>
      <div className={alert ? styles.activeWrapper : styles.wrapper}>
        Contact is already exist!
      </div>
    </CSSTransition>
  );
};
Alert.propTypes = {
  alert: PropTypes.bool.isRequired,
};
export default Alert;
