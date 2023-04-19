import { useState, useEffect } from "react";
import axios from "axios";
import "./main.module.css";
import UserCard from "../Users/UserCard";
import classes from "./main.module.css";

function Main() {
  const url = "https://api.github.com/users";
  const [users, setUsers] = useState([]);

  const [visible, setVisible] = useState(6);

  const fetchDetails = async () => {
    try {
      const response = await axios.get(url);

      setUsers(response.data);
    } catch (eror) {
      console.log("Problemi con il caricamento dell'API");
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      <div className={classes.people}>
        <div className="elements">
          {users.slice(0, visible).map((user) => (
            <UserCard key={user.id} user={user} id={user.id} />
          ))}
        </div>
      </div>
      <div className={classes.actionsTwo}>
        {visible < users.length && (
          <button
            className={classes.reset}
            onClick={() => setVisible(visible + 3)}
          >
            Add more users
          </button>
        )}
        {visible ? (
          <button
            className={classes.delete}
            onClick={() => setVisible(visible - 3)}
          >
            Less users
          </button>
        ) : null}
      </div>
    </>
  );
}
export default Main;
