import React from "react";
import styles from "./BuildControl.css";

const BuildControl = (props) => {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.label}</div>
      <button
        onClick={props.deleted}
        className={styles.Less}
        disabled={props.disabled}
      >
        Less
      </button>
      <button onClick={props.added} className={styles.More}>
        More
      </button>
    </div>
  );
};

export default BuildControl;