import proptypes from 'proptypes';

const Section = ({ title, children }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

Section.prototype = {
  title: proptypes.string,
  children: proptypes.object.isRequired,
};

export default Section;
