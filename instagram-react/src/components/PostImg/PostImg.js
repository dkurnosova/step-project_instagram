import "./PostImg.scss";
import decodeImageData from "../../assets/decodeImageData";
import PropTypes from "prop-types";

const PostImg = ({ post, setIsOpenModal, setModalData }) => {
   const {photo, likes, comments } = post;

   return (
      <>
         <img src={decodeImageData(photo)} alt="post" />
         <div
            className="post-img__overlay"
            data-testid="post-img-overlay"
            onClick={() => {
               setModalData(post);
               setIsOpenModal(true);
            }}>
            <div className="post-img__info">
               <svg color="white" fill="white" height="20" role="img" viewBox="0 0 48 48" width="24">
                  <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
               </svg>
               <span>{likes.length}</span>
            </div>
            <div className="post-img__info">
               <svg color="white" fill="white" height="20" role="img" viewBox="0 0 24 24" width="24">
                  <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"></path>
               </svg>
               <span>{comments.length}</span>
            </div>
         </div>
      </>
   );
};

PostImg.propTypes = {
   setIsOpenModal: PropTypes.func.isRequired,
   post: PropTypes.object.isRequired,
   setModalData: PropTypes.func.isRequired,
};

export default PostImg;
