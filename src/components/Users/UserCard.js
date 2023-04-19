import classes from "./UserCard.module.css";
import Button from "../UI/Button";
import CartContext from "../../store/cartContext";
import { useContext } from "react";
import ButtonRemove from "../UI/ButtonRemove";


const UserCard = ({ user }) => {
  const context = useContext(CartContext);
  const addToCartHandler = (amount) => {
    context.addItem({
      id: user.id,
      name: user.login,
      img: user.avatar_url,
      amount: amount,
    });
  };

  const cartItemRemoveHandler = (id) => {
    context.removeItem(id);
  };

  return (
    <>
      <ul className={classes["user-list"]}>
        <article>
          <li key={user.id}>
            <img
              src={user.avatar_url}
              alt={user.login}
              className={classes["person-img"]}
            />

            <div className={classes["person-info"]}>
              <div className={classes["person-action"]}>
                <h4>{user.login}</h4>

                <div className={classes.button}>
                  <Button onAddToCart={addToCartHandler} />
                  <ButtonRemove
                    onRemove={cartItemRemoveHandler.bind(null, user.id)}
                  />
                </div>
              </div>
            </div>
          </li>
        </article>
      </ul>
    </>
  );
};

export default UserCard;
