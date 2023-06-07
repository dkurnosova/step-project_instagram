const getUser = async (userId) => {
   try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}users/${userId}`);
      if (!response.ok) {
         throw new Error("User not found");
      }
      const user = await response.json();
      return user;
   } catch (error) {
      console.error(error);
   }
};

export default getUser

