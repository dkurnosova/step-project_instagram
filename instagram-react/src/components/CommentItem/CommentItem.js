/* eslint-disable react-hooks/exhaustive-deps */
import "./CommentItem.scss";
import UserIcon from "../UserIcon/UserIcon";
import getUser from "../../assets/getUser";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CommentItem = ({ comment }) => {
   const { userId, text } = comment;
   const [user, setUser] = useState(null);

   useEffect(() => {
      const getData = async () => {
          try {
             const userData = await getUser(userId);
             setUser(userData);
          } catch (error) {
             console.error("Failed to fetch user data:", error);
          }
      };
      getData();
   }, []);

   return (
      <>
         {user && (
            <>
               <UserIcon user={user} className="user-icon-small" />
               <p className="comment__text">{text}</p>
            </>
         )}
      </>
   );
};

CommentItem.propTypes = {
   comment: PropTypes.object.isRequired,
};

export default CommentItem;
