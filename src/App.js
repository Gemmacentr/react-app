import "./App.css";
import Main from "./components/Layout/Main";
import Cart from "./components/Users/Cart";
import { useState } from "react";
import Header from "./components/Layout/Header";
import CartProvider from "./store/cardProvider";

function App() {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };
  return (
    <section>
      <div className="container">
        <CartProvider>
          {show && <Cart onClose={hideModal} />}
          <Header onShow={showModal} />

          <Main />
        </CartProvider>
      </div>
    </section>
  );
}

export default App;
