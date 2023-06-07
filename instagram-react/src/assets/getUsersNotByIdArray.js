const getUsersNotByIdArray = async (userIds) => {
   try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}users?recommend=${userIds.join(",")}`);
      if (!response.ok) {
         throw new Error("Users not found");
      }
      const { data } = await response.json();
      return data;
   } catch (error) {
      console.error(error);
   }
};

export default getUsersNotByIdArray;
