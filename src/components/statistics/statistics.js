import proptypes from 'proptypes';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <span>Good: {good}</span>
      <p></p>
      <span>Neutral: {neutral}</span>
      <p></p>
      <span>Bad: {bad}</span>
      <p></p>
      <span>Total: {total}</span>
      <p></p>
      <span>Positive Feedback: {positivePercentage} %</span>
      <p></p>
    </div>
  );
};

Statistics.propTypes = {
  good: proptypes.number.isRequierd,
  neutral: proptypes.number.isRequierd,
  bad: proptypes.number.isRequierd,
  total: proptypes.number.isRequierd,
  positivePercentage: proptypes.number.isRequierd,
};

export default Statistics;
