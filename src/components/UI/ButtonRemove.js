import classes from "./Button.module.css";
function ButtonRemove(item) {
  return (
    <>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={item.onRemove}>
          {" "}
          - Remove{" "}
        </button>
      </div>
    </>
  );
}

export default ButtonRemove;
