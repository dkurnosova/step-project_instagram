const changeUserSubscribers = async (userId, subscribers) => {
   try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}users/${userId}/subscriptions`, {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ subscriptions: subscribers }),
      });
      if (!response.ok) {
         throw new Error("Error in subscriber update");
      }
      const data = await response.json();
      return data;
   } catch (error) {
      console.error(error);
   }
};

export default changeUserSubscribers;
