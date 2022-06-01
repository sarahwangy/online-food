import { useState } from "react";
import CartProvider from "./store/reducer-hooks/cart-context";
import Header from "./components/hearder/header/header";
import Meals from "./components/home-meals/meal";
import Cart from "./components/cart/cart/cart";
import "./App.css";

function App() {
  const [cartIsEnabled, setcartIsEnabled] = useState(false);

  const clickCartHandler = () => {
    setcartIsEnabled(true);
  };

  const hideCartHandler = () => {
    setcartIsEnabled(false);
  };

  return (
    <CartProvider>
      {cartIsEnabled && <Cart onHideCart={hideCartHandler} />}
      <Header onCartClick={clickCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
