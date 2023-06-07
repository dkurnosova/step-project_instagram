import "./CommentsContainer.scss";
import React, { useState } from "react";
import CommentItem from "../CommentItem/CommentItem";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import addComment from "../../assets/addComment";
import PropTypes from "prop-types";

const CommentsContainer = ({ comments, postId, isModal }) => {
   const [commentsArray, setCommentsArray] = useState(comments);
   const [newComment, setNewComment] = useState("");
   const [showAllComments, setShowAllComments] = useState(isModal);
   const authorizedUser = useSelector((store) => store.users.authorizedUser._id);
   
   const handleAddComment = async (postId, commentData) => {
      const data = await addComment(postId, commentData);
      if (data.status === "success") {         
         setCommentsArray((prev) => {
            const comments = [...prev];
            comments.unshift({ ...commentData, _id: nanoid() });
            return comments;
         });
            setNewComment("");
      }
   };

   return (
      <div className="comments-continer">
         <div className={`comments${isModal ? " comments-modal" : ""}`}>
            {commentsArray.length > 0 && (
               <>
                  {showAllComments ? (
                     <>
                        {commentsArray.map((comment) => (
                           <div className="comments__item" key={comment._id}>
                              <CommentItem comment={comment} />
                           </div>
                        ))}
                     </>
                  ) : (
                     <div className="comments__item" key={commentsArray[0]._id}>
                        <CommentItem comment={commentsArray[0]} />
                     </div>
                  )}
               </>
            )}
            {commentsArray.length > 1 && !showAllComments && (
               <div
                  className="comments__show-all-btn"
                  onClick={() => {
                     setShowAllComments(true);
                  }}>
                  Показати всі коментарі
               </div>
            )}
         </div>
         <div className="add-comment">
            <input
               type="text"
               value={newComment}
               onChange={(e) => setNewComment(e.target.value)}
               placeholder="Додати коментар..."
            />
            {newComment && (
               <span
                  onClick={() => {
                     handleAddComment(postId, { userId: authorizedUser, text: newComment });
                  }}>
                  Опублікувати
               </span>
            )}
         </div>
      </div>
   );
};

CommentsContainer.propTypes = {
   isModal: PropTypes.bool,
   comments: PropTypes.array.isRequired,
   postId: PropTypes.string.isRequired,
};

CommentsContainer.defaultProps = {
   isModal: false,
};

export default CommentsContainer;
