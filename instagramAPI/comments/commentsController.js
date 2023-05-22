import CommentsDataLayer from "./CommentsDataLayer.js";

const dataLayer = new CommentsDataLayer();

export const getComments = async (req, res) => {
   try {
      const comments = await dataLayer.getComments();
      res.json({ status: "success", data: comments });
   } catch (err) {
      res.status(400).json({ status: "error", message: err.message });
   }
};

export const addComment = async (req, res) => {
   try {
      const comment = await dataLayer.addComment(req.body);
      res.json({ status: "success", data: comment });
   } catch (err) {
      res.status(400).json({ status: "error", message: err.message });
   }
};
