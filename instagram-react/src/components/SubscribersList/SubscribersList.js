import "./SubscribersList.scss";
import UserIcon from "../UserIcon/UserIcon";
import PropTypes from "prop-types";

const SubscribersList = ({userArray, isRecommend}) => {

   return (
      <div className="user-list">
         {isRecommend ? <h3>Рекомендовані для вас:</h3> : <h3>Ваші підписки:</h3>}
         {userArray.map((userData) => {
            const { _id } = userData;
            return (
               <div className="user-link" key={`user-${_id}`}>
                  <UserIcon user={userData} className="user-icon-small" isRecommend={isRecommend} />
               </div>
            );
         })}
      </div>
   );
};

SubscribersList.propTypes = {
   userArray: PropTypes.array.isRequired,
   isRecommend: PropTypes.bool,
};

SubscribersList.defaultProps = {
   isRecommend: false,
};

export default SubscribersList;
