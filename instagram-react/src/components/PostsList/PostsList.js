import "./PostsList.scss";
import { useSelector } from "react-redux";
import Post from "../Post/Post";

const PostsList = () => {
   const posts = useSelector((store) => store.posts.posts);
   return (
      <section className="posts-list">
         {posts.map((post) => {
            const { _id } = post;
            return (
               <div className="post" key={_id}>
                  <Post post={post} />
               </div>
            );
         })}
      </section>
   );
};

export default PostsList;
