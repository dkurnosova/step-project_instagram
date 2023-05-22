import mongoose from "mongoose";

const postsSchema = new mongoose.Schema({
   userId: {
      type: String,
      required: true,
   },
   photo: Buffer,
   likes: [String],
});

const PostsModel = mongoose.model("posts", postsSchema);

export default PostsModel;