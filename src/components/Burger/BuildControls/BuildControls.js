import React from "react";

import styles from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
];

const BuildControls = (props) => (
  <div className={styles.BuildControls}>
    <p>Total Price: {props.totalPrice.toFixed(2)}</p>
    {controls.map((c) => (
      <BuildControl
        key={c.label}
        label={c.label}
        added={() => props.ingredientAdded(c.type)}
        deleted={() => props.ingredientDeleted(c.type)}
        disabled={props.disabled[c.type]}
      />
    ))}
    <button
      onClick={props.ordered}
      disabled={!props.purchaseble}
      className={styles.OrderButton}
    >
      Order Now
    </button>
  </div>
);

export default BuildControls;
