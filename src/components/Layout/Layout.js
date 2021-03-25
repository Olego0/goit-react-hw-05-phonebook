import React from "react";
import PropTypes from "prop-types";
import styles from "./Layout.module.css";
export default function Layout({ title }) {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
    </>
  );
}
Layout.propTypes = {
  title: PropTypes.string,
};
Layout.defaultProps = {
  title: "",
};
