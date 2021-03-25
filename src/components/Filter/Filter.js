import React from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";
function Filter({ filterChange, filterValue }) {
  return (
    <div className={styles.wrapper}>
      <label>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          name="filter"
          value={filterValue}
          onChange={filterChange}
        ></input>
      </label>
    </div>
  );
}
export default Filter;

Filter.propTypes = {
  filterChange: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};
