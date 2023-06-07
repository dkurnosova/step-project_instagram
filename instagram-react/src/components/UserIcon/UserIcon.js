/* eslint-disable react-hooks/exhaustive-deps */
import "./UserIcon.scss";
import decodeImageData from "../../assets/decodeImageData";
import { Link } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import PropTypes from "prop-types";
import BtnSubscribe from "../BtnSubscribe/BtnSubscribe";
import { editSubscribers } from "../../store/slices/usersSlice";

const UserIcon = ({ user, className, isRecommend }) => {
   const { name, icon, _id } = user;
   const { subscriptions, _id: authorizedUserId } = useSelector((store) => store.users.authorizedUser);
   const isTracked = subscriptions.includes(_id)
   const dispatch = useDispatch();

   return (
      <>
         <div data-testid="user-icon-small" className={className}>
            <Link to={`/${_id}`} state={{ user }}>
               <img className={`${className}__avatar`} src={decodeImageData(icon)} alt="icon" />
            </Link>
            <Link to={`/${_id}`} state={{ user }}>
               <h4 className={`${className}__name`}>{name}</h4>
            </Link>
         </div>
         {isRecommend && _id !== authorizedUserId && (
            <BtnSubscribe
               onClick={() => {
                  dispatch(editSubscribers(_id));
               }}
               className="-small"
               isTracked={isTracked}
            />
         )}
      </>
   );
};

UserIcon.propTypes = {
   user: PropTypes.object.isRequired,
   className: PropTypes.string,
   isRecommend: PropTypes.bool,
};

UserIcon.defaultProps = {
   className: "user-icon",
   isRecommend: false,
};

export default UserIcon;
