const changePostLikes = async (postId, likes) => {
   try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}posts/${postId}/likes`, {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ likes: likes }),
      });
      if (!response.ok) {
         throw new Error("Error in likes update");
      }
      const post = await response.json();
      return post;
   } catch (error) {
      console.error(error);
   }
};

export default changePostLikes;
