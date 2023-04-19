import HeaderButton from "./HeaderButton";
import classes from "./Header.module.css";

function Navbar(props) {
  //this function recieves the index (position) of the item the user clicked in the user interface

  return (
    <>
      <h1 className={classes.title}> wishes users list</h1>
      <aside className="header-favorites">
        <div className="header-favorites__item">
          <span className="material-symbols-rounded"></span>
        </div>
        <HeaderButton onClick={props.onShow} />
      </aside>
    </>
  );
}

export default Navbar;
