import PropTypes from "prop-types";
import { useState } from "react";
import css from "./Options.module.css";

const Options = ({ onUpdateFeedback }) => {
  const [feedbackType, setFeedbackType] = useState("");

  const handleUpdateFeedback = (type) => {
    setFeedbackType(type);
    onUpdateFeedback(type);
  };

  return (
    <>
      <button
        className={css.button}
        onClick={() => handleUpdateFeedback("good")}
      >
        Good
      </button>

      <button
        className={css.button}
        onClick={() => handleUpdateFeedback("neutral")}
      >
        Neutral
      </button>

      <button
        className={css.button}
        onClick={() => handleUpdateFeedback("bad")}
      >
        Bad
      </button>

      {feedbackType !== "" && (
        <button className={css.button} onClick={() => handleUpdateFeedback("")}>
          Reset
        </button>
      )}
    </>
  );
};

Options.propTypes = {
  onUpdateFeedback: PropTypes.func.isRequired,
};

export default Options;
