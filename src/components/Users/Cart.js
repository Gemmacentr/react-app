import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cartContext";
import { useContext } from "react";
import CartItem from "./CartItem";

function Cart(props) {
  const context = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    context.removeItem(id);
  };
  const hasItems = context.items.length > 0;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {context.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          img={item.img}
          onRemove={cartItemRemoveHandler.bind(0, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <div>{!hasItems && <h4>There're not favorite users</h4>}</div>
      </div>
    </Modal>
  );
}

export default Cart;
