import PropTypes from "prop-types";

import css from "./Options.module.css";

const Options = ({ onUpdateFeedback, showResetButton }) => {
  const handleUpdateFeedback = (type) => {
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

      {showResetButton && (
        <button className={css.button} onClick={() => handleUpdateFeedback("")}>
          Reset
        </button>
      )}
    </>
  );
};

Options.propTypes = {
  showResetButton: PropTypes.bool.isRequired,
  onUpdateFeedback: PropTypes.func.isRequired,
};

export default Options;
