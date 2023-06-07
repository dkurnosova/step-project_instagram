/* eslint-disable react-hooks/exhaustive-deps */
import "./PostsList.scss";
import { useState, useEffect } from "react";
import Post from "../Post/Post";
import Preloader from "../Preloder/Preloader";
import getPostsData from "../../assets/getPostsData";

const PostsList = () => {
   const [posts, setPosts] = useState([]);
   const [pageNumber, setPageNumber] = useState(1);

   useEffect(() => {
      const getData = async () => {
         const postsData = await getPostsData(pageNumber);
         if (postsData.status === "success") {
            setPosts((prev) => {
               let postsArray = [...prev];
               postsArray = [...postsArray,...postsData.data];
               return postsArray;
            });
         }
      };
      getData();
   }, [pageNumber]);

   const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 10 >= document.documentElement.offsetHeight) {
         setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <>
         {!posts ? (
            <Preloader />
         ) : (
            <section className="posts-list">
               {posts.map((post) => {
                  const { _id } = post;
                  return (
                     <div className="post" key={`post-${_id}`}>
                        <Post post={post} />
                     </div>
                  );
               })}
            </section>
         )}
      </>
   );
};

export default PostsList;
