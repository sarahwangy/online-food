import styles from "./mealText.module.css";

const MealsText = () => {
  return (
    <section className={styles.summary}>
      <h2>Enjoying your food in a beautiful day!</h2>
      <p className={styles.commentary}>
        Fancy <span className={styles.keyPoints}>Chips</span> ? Noodles{" "}
        <span className={styles.keyPoints}>Vegetables</span> ? Or have a BBQ
        party outside <span className={styles.keyPoints}> OFFER</span>? An
        additional Service fee between $1-$4 applies to delivery orders.
      </p>
      <p className={styles.commentary}>
        We are proud of <span className={styles.underlined}>Our Options </span>,
        <span className={styles.underlined}>fresh</span> and high quality{" "}
        <span className={styles.keyPoints}>Order Now!</span>!
      </p>
    </section>
  );
};

export default MealsText;
