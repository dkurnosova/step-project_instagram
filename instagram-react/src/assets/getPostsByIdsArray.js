const getPostsByIdsArray = async (postsIds) => {
   try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}posts?ids=${postsIds.join(",")}`);
      if (!response.ok) {
         throw new Error("Posts not found");
      }
      const { data } = await response.json();
      return data;
   } catch (error) {
      console.error(error);
   }
};

export default getPostsByIdsArray;
