import styles from "./currentMeal.module.css";
import Card from "../../../layout-UI/card/card";
import MealItem from "../meal-item/mealItem";

const MEALS = [
  {
    id: "m1",
    name: "Veggie Cali Burrito",
    description: "Sauteed Vegetables with Guacamole filling",
    price: 16.99,
  },
  {
    id: "m2",
    name: "Pad Thai Noodles",
    description: "Noodles with sweet and sour taste.",
    price: 16.59,
  },
  {
    id: "m3",
    name: "Spring Rolls",
    description:
      "Four pieces. Thai spring rolls served with sweet chilli sauce",
    price: 12.0,
  },
  {
    id: "m4",
    name: "Green Curry",
    description: "Thai green curry cooked in coconut cream and vegetables.",
    price: 10.99,
  },
];

const CurrentMeals = () => {
  const meals = MEALS.map(({ id, name, description, price }) => (
    <MealItem
      key={id}
      id={id}
      name={name}
      description={description}
      price={price}
    />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};

export default CurrentMeals;
