/* eslint-disable react-hooks/exhaustive-deps */
import "./UserPage.scss";
import { useNavigate, useLocation } from "react-router-dom";
import decodeImageData from "../../assets/decodeImageData";
import { useSelector, useDispatch } from "react-redux";
import BtnSubscribe from "../../components/BtnSubscribe/BtnSubscribe";
import { editSubscribers } from "../../store/slices/usersSlice";
import getPostsByIdsArray from "../../assets/getPostsByIdsArray";
import { useState, useEffect } from "react";
import Preloader from "../../components/Preloder/Preloader";
import PostImg from "../../components/PostImg/PostImg";
import Modal from "../../components/Modal/Modal";
import getUser from "../../assets/getUser";

const UserPage = () => {
   const location = useLocation();
   const userId = location.pathname.split("/").join("");
   const [user, setUser] = useState({});
   const { _id, name, icon, posts } = user;
   const { subscriptions, _id: authorizedUserId } = useSelector((store) => store.users.authorizedUser);
   const isTracked = subscriptions.includes(_id);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [postsData, setPostsData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [modalData, setModalData] = useState({});
   const [isOpenModal, setIsOpenModal] = useState(false);

   useEffect(() => {
      const getUserData = async () => {
         setIsOpenModal(false);
         const userData = await getUser(userId);
         if (!userData) {
            navigate("/");
            return;
         }
         setUser(userData);
         if (userData.posts.length !== 0) {
            const data = await getPostsByIdsArray(userData.posts);
            setPostsData(data.reverse());
         } else {
            setPostsData([]);
         }
         setIsLoading(false);
      };
      getUserData();
   }, [userId]);

   return (
      <>
         {isLoading ? (
            <Preloader />
         ) : (
            <>
               <header
                  className="header"
                  onClick={() => {
                     navigate("/");
                  }}>
                  <img src="./img/logo.png" alt="logo" />
               </header>
               <main className="user-page">
                  <header>
                     <img className="user-page__icon" src={decodeImageData(icon)} alt="icon" />
                     <h2>{name}</h2>
                     {_id !== authorizedUserId && (
                        <BtnSubscribe
                           onClick={() => {
                              dispatch(editSubscribers(_id));
                           }}
                           isTracked={isTracked}
                        />
                     )}
                  </header>
                  <section>
                     {postsData.map((post) => {
                        const { _id } = post;
                        return (
                           <div className="post-img" key={`post-img-${_id}`}>
                              <PostImg post={post} setIsOpenModal={setIsOpenModal} setModalData={setModalData} />
                           </div>
                        );
                     })}
                  </section>
                  {posts.length === 0 && (
                     <div className="no-posts">
                        <div className="no-posts__img">
                           <img src="./img/icon-camera.png" alt="" />
                        </div>
                        <p>Ще немає дописів</p>
                     </div>
                  )}
               </main>
            </>
         )}
         {isOpenModal && (
            <Modal isTracked={isTracked} user={user} setIsOpenModal={setIsOpenModal} modalData={modalData} />
         )}
      </>
   );
};

export default UserPage;
