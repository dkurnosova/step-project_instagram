import CommentsModel from "./CommentsModel.js";

class CommentsDataLayer {
   async getComments() {
      try {
         const comments = await CommentsModel.find();
         return comments;
      } catch (err) {
         throw err;
      }
    }
    
   async addComment(data) {
      try {
         const comment = await new CommentsModel(data).save();
         return comment;
      } catch (err) {
         throw err;
      }
   }
}

export default CommentsDataLayer;