/* eslint-disable react-hooks/exhaustive-deps */
import "./Modal.scss";
import decodeImageData from "../../assets/decodeImageData";
import Likes from "../Likes/Likes";
import CommentsContainer from "../CommentsContainer/CommentsContainer";
import UserIcon from "../UserIcon/UserIcon";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import changePostLikes from "../../assets/changePostLikes";
import PropTypes from "prop-types";

const Modal = ({ setIsOpenModal, modalData, user, isTracked }) => {
   const { photo, likes, comments, _id } = modalData;

   const authorizedUser = useSelector((store) => store.users.authorizedUser._id);
   const [newLikes, setNewLikes] = useState(likes);
   const likeId = newLikes.indexOf(authorizedUser);
   const [isLiked, setIsLiked] = useState(likeId !== -1);

   useEffect(() => {
      const changeData = async () => {
         await changePostLikes(_id, newLikes);
      };
      changeData();
   }, [newLikes]);

   const changeIsLiked = () => {
      if (isLiked) {
         setIsLiked(false);
         setNewLikes((prev) => {
            const likesArray = [...prev];
            likesArray.splice(likeId, 1);
            return likesArray;
         });
      } else {
         setIsLiked(true);
         setNewLikes((prev) => {
            const likesArray = [...prev];
            likesArray.push(authorizedUser);
            return likesArray;
         });
      }
   };

   return (
      <div
         className="modal"
         onMouseDown={(event) => {
            if (event.target.classList.contains("modal")) {
               setIsOpenModal(false);
            }
         }}>
         <div className="modal-container">
            <img className="modal-img" src={decodeImageData(photo)} alt="modal-img" />
            <div className="modal-info">
               <div className="modal-info__user">
                  <UserIcon user={user} isRecommend={!isTracked} />
               </div>
               <CommentsContainer comments={comments.reverse()} postId={_id} isModal={true} />
               <div className="modal-info__likes">
                  <Likes likes={newLikes} changeIsLiked={changeIsLiked} isLiked={isLiked} />
               </div>
            </div>
         </div>
      </div>
   );
};

Modal.propTypes = {
   setIsOpenModal: PropTypes.func.isRequired,
   modalData: PropTypes.object.isRequired,
   user: PropTypes.object.isRequired,
   isTracked: PropTypes.bool.isRequired,
};

export default Modal;
