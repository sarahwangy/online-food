import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../store/reducer-hooks/cart-context";
import styles from "./headerCart.module.css";
import { BsFillCartCheckFill } from "react-icons/bs";

const HeaderCart = ({ onClick }) => {
  const ctx = useContext(CartContext);
  const [cartAnimActive, setCartAnimActive] = useState(false);
  const { items } = ctx;
  const itemsTotal = items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  const classes = `${styles.button} ${cartAnimActive ? styles.bump : ""}`;

  // Leverages state to add the bump class (cart animation). The state resets to false every 400ms and the return within the hook ensures that if the cart's clicked repeatedly, the setTimeout resets
  useEffect(() => {
    if (items.length === 0) return;
    setCartAnimActive(true);
    const timer = setTimeout(() => {
      setCartAnimActive(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [items]);

  return (
    <button onClick={onClick} className={classes}>
      <span className={styles.icon}>
        <BsFillCartCheckFill />
      </span>
      <span>Cart</span>
      <span className={styles.badge}>{itemsTotal}</span>
    </button>
  );
};

export default HeaderCart;
