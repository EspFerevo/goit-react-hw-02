import PropTypes from "prop-types";
import css from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, total, positivePercent }) => (
  <>
    <p className={css.text}>Good: {good}</p>
    <p className={css.text}>Neutral: {neutral}</p>
    <p className={css.text}>Bad: {bad}</p>
    <p className={css.text}>Total: {total}</p>
    <p className={css.text}>Positive: {positivePercent}%</p>
  </>
);

Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercent: PropTypes.number.isRequired,
};

export default Feedback;
