import PostsDataLayer from "./PostsDataLayer.js";

const dataLayer = new PostsDataLayer();

export const getPosts = async (req, res) => {
   try {
      const posts = await dataLayer.getPosts();
      res.json({ status: "success", data: posts });
   } catch (err) {
      res.status(400).json({ status: "error", message: err.message });
   }
};

export const addPost = async (req, res) => {
   try {
      const { userId, likes } = req.body;
      const photo = req.file.buffer;
      const post = await dataLayer.addPost({
         userId,
         photo,
         likes,
      });
      res.json({ status: "success", data: post });
   } catch (err) {
      res.status(400).json({ status: "error", message: err.message });
   }
};
