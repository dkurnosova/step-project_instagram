import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema({
   postId: {
      type: String,
      required: true,
   },
   text: {
      type: String,
      required: true,
   },
   userId: {
      type: String,
      required: true,
   },
});

const CommentsModel = mongoose.model("comments", commentsSchema);

export default CommentsModel;