import React from "react";
import classes from "./Cart.module.css";

function CartItem(props) {
  return (
    <li className={classes["cart-item"]}>
      <div className={classes.items_description}>
        <h2>{props.name}</h2>
        <img src={props.img} alt={props.login} className={classes.img} />
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onRemove}>
          {" "}
          Remove{" "}
        </button>
      </div>
    </li>
  );
}

export default CartItem;
