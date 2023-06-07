/* eslint-disable react-hooks/exhaustive-deps */
import "./Post.scss";
import UserIcon from "../UserIcon/UserIcon";
import { useSelector} from "react-redux";
import { useState, useEffect } from "react";
import decodeImageData from "../../assets/decodeImageData";
import getUser from "../../assets/getUser";
import changePostLikes from "../../assets/changePostLikes";
import Likes from "../Likes/Likes";
import CommentsContainer from "../CommentsContainer/CommentsContainer";
import PropTypes from "prop-types";

const Post = ({ post }) => {
   const { _id: postId, photo, likes, userId, comments } = post;
   const [user, setUser] = useState(null);

   const authorizedUser = useSelector((store) => store.users.authorizedUser._id);
   const [newLikes, setNewLikes] = useState(likes);
   const likeId = newLikes.indexOf(authorizedUser);
   const [isLiked, setIsLiked] = useState(likeId !== -1);

   useEffect(() => {
      const getData = async () => {
         const userData = await getUser(userId)
         setUser(userData)
      }
      getData()
   }, []);

   useEffect(() => {
      const changeData = async () => {
         await changePostLikes(postId, newLikes);
      };
      changeData();
   }, [newLikes, postId]);

   const changeIsLiked =  () => {
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
      <>
         {user && <UserIcon user={user} />}
         <img
            className="post__image"
            src={decodeImageData(photo)}
            alt="post"
            onDoubleClick={() => {
               changeIsLiked();
            }}
         />
         <Likes likes={newLikes} changeIsLiked={changeIsLiked} isLiked={isLiked} />
         <CommentsContainer comments={comments} postId={postId} />
      </>
   );
};

Post.propTypes = {
   post: PropTypes.object.isRequired,
};

export default Post;
