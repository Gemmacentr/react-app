import React from "react";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cartContext";
import classes from "./HeaderButton.module.css";

function HeaderButton(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const context = useContext(CartContext);
  const { items } = context;

  const numberOfItems = context.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}></span>
      <span>Your Favourite Users</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
}

export default HeaderButton;
