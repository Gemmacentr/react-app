import classes from "./Button.module.css";
import { useRef } from "react";
import React from "react";
import Input from "../UI/Input";

const Button = (props) => {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmountNumber > 1) {
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          input={{
            id: props.id,
            type: "number",
            min: "1",
            max: "1",
            defaultValue: "1",
          }}
        />
        <div className={classes.actions}>
          <button className={classes["button--alt"]}>+ Add</button>
        </div>
      </form>
    </>
  );
};

export default Button;
