import "./UserIcon.scss";
import decodeImageData from "../../assets/decodeImageData";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

const UserIcon = ({ user }) => {
   const { name, icon } = user;
   return (
      <div className="user-icon">
         <Link to={`/${name}`}>
            <img className="user-icon__avatar" src={decodeImageData(icon)} alt="icon" />
         </Link>
         <Link to={`/${name}`}>
            <h4 className="user-icon__name">{name}</h4>
         </Link>
      </div>
   );
};

// UserIcon.propTypes = {
//    user:
// };

export default UserIcon;
