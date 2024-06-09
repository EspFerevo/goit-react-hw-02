import css from "./Description.module.css";
import { GiCoffeeCup } from "react-icons/gi";

const Description = () => {
  return (
    <>
      <h1 className={css.title}>Sip Happens Café</h1>
      <GiCoffeeCup className={css.icon} />
      <p className={css.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
};

export default Description;
