import proptypes from 'proptypes';

const Notification = ({ message }) => {
  return <h2>{message}</h2>;
};

Notification.propTypes = {
  message: proptypes.string.isRequired,
};

export default Notification;
