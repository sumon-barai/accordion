/* eslint-disable react/prop-types */
const AccordianItem = ({ title, children, isActive, onActive }) => {
  return (
    <div className="accordian-child">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onActive}>show</button>}
    </div>
  );
};

export default AccordianItem;
