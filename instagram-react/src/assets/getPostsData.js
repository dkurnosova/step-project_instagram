const getPostsData = async (pageNumber) => {
   try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}posts?page=${pageNumber}&limit=3`);
      if (!response.ok) {
         throw new Error("Failed to fetch post data");
      }
      const data = await response.json();
      return data;
   } catch (error) {
      console.error(error);
   }
};

export default getPostsData;