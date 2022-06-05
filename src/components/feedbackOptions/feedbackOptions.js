import proptypes from 'proptypes';
import s from './feedbackOptions.module.css';

const feedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(button => {
    return (
      <button
        className={s.button}
        key={button}
        type="button"
        onClick={onLeaveFeedback}
        name={button}
      >
        {button}
      </button>
    );
  });
};

feedbackOptions.propTypes = {
  options: proptypes.arrayOf(proptypes.string.isRequired),
  onLeaveFeedback: proptypes.func.isRequired,
};

export default feedbackOptions;
