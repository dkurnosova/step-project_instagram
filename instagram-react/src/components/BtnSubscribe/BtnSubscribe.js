import "./BtnSubscribe.scss";
import PropTypes from "prop-types";
import classNames from "classnames";

const BtnSubscribe = ({ onClick, className, isTracked }) => {
   const buttonClassName = classNames(
      `btn-subscribe${className}`,
      {
         [`btn-subscribe${className}--not-tracked`]: !isTracked,
      },
      className
   );

   return (
      <button className={buttonClassName} onClick={onClick}>
         {isTracked ? "Відписатись" : "Стежити"}
      </button>
   );
};
BtnSubscribe.propTypes = {
   onClick: PropTypes.func.isRequired,
   className: PropTypes.string,
   isTracked: PropTypes.bool.isRequired,
};

BtnSubscribe.defaultProps = {
   className: "",
};

export default BtnSubscribe;
