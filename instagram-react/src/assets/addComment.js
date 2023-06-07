const addComment = async (postId, commentData) => {
   try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}posts/${postId}/comments`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(commentData),
      });

      const data = await response.json();
      if (!response.ok) {
         throw new Error("Error in comment saving");
      }
      return data;
   } catch (error) {
      console.error(error);
   }
};

export default addComment;
