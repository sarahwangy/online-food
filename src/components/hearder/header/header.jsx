import HeaderCart from "../hearder-cart/headerCart";
import meals from "../../../assets/image/food.jpeg";
import styles from "./header.module.css";

const Header = ({ onCartClick }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Enjoying</h1>
        <HeaderCart onClick={onCartClick} />
      </header>
      <div className={styles.imgCont}>
        <img src={meals} alt="food!" draggable="false" />
      </div>
    </>
  );
};

export default Header;
