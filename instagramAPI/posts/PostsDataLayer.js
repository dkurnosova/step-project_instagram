import PostsModel from "./PostsModel.js";

class PostsDataLayer {
   async getPosts() {
      try {
         const posts = await PostsModel.find();
         return posts;
      } catch (err) {
         throw err;
      }
    }
    
   async addPost(data) {
      try {
         const post = await new PostsModel(data).save();
         return post;
      } catch (err) {
         throw err;
      }
   }
}

export default PostsDataLayer;