import { useContext } from "react";
import { CartContext } from "../../../store/reducer-hooks/cart-context";
import MealItemForm from "../meal-item-form/mealItemForm";
import styles from "./mealItem.module.css";

const MealItem = ({ price, name, description, id }) => {
  const { addItem } = useContext(CartContext);

  const parsedPrice = `${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>${parsedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} addToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
