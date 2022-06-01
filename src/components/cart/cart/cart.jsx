import { useContext, useState } from "react";
import { CartContext } from "../../../store/reducer-hooks/cart-context";
import Modal from "../../../layout-UI/modal/modal";
import CartItem from "../cart-item/cartItem";
import CheckoutForm from "../cart-order-form/cartOrderForm";
import OrderSuccess from "../../../assets/image/order-success.jpeg";
import styles from "./cart.module.css";

const Cart = ({ onHideCart }) => {
  const { addItem, removeItem, clearCart, totalAmount, items } =
    useContext(CartContext);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const ttlAmount = `$${totalAmount.toFixed(2)}`;
  const itemsExist = items.length > 0;

  const itemAddHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const itemRemoveHandler = (id) => {
    removeItem(id);
  };

  const placeOrderHandler = () => {
    setShowOrderForm(true);
  };

  const orderHandler = () => {
    setIsSubmitting(true);
    clearCart();
    setTimeout(() => {
      setIsSubmitting(false);
      setDidSubmit(true);
    }, 1000);
  };

  const cartItems = (
    <ul className={styles.cartItems}>
      {items.map((item) => (
        <CartItem
          onRemove={() => itemRemoveHandler(item.id)}
          onAdd={() => itemAddHandler(item)}
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
        ></CartItem>
      ))}
    </ul>
  );

  const modalActions = (
    <div className={styles.actions}>
      <button onClick={onHideCart} className={styles.buttonAlt}>
        Close
      </button>
      {itemsExist && (
        <button onClick={placeOrderHandler} className={styles.button}>
          Order
        </button>
      )}
    </div>
  );

  const cartContent = (
    <>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{ttlAmount}</span>
      </div>
      {showOrderForm && (
        <CheckoutForm onOrder={orderHandler} onCancel={onHideCart} />
      )}
      {!showOrderForm && modalActions}
    </>
  );

  const isSubmittingContent = <p>Submitting your order now, please wait...</p>;

  const didSubmitContent = (
    <div className={styles.submitWrapper}>
      <h3>Order placed successfully, good job!</h3>
      <div className={styles.imgCover}>
        <img src={OrderSuccess} alt="order successful"></img>
      </div>
      <div className={styles.actions}>
        <button onClick={onHideCart} className={styles.button}>
          Close
        </button>
      </div>
    </div>
  );

  return (
    <Modal onHideCart={onHideCart}>
      {!isSubmitting && !didSubmit && cartContent}
      {isSubmitting && isSubmittingContent}
      {!isSubmitting && didSubmit && didSubmitContent}
    </Modal>
  );
};

export default Cart;
