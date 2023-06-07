import { createSlice } from "@reduxjs/toolkit";
import getUser from "../../assets/getUser";

const usersSlice = createSlice({
   name: "users",
   initialState: {
      isLoading: true,
      authorizedUser: {},
   },
   reducers: {
      setIsLoading: (state, action) => {
         state.isLoading = action.payload;
      },
      getAuthorizedUser: (state, action) => {
         state.authorizedUser = action.payload;
      },
      editSubscribers: (state, action) => {
         const subscriptionsIds = [...state.authorizedUser.subscriptions];
         const index = subscriptionsIds.indexOf(action.payload);
         if (index === -1) {
               subscriptionsIds.push(action.payload)
         } else {
               subscriptionsIds.splice(index, 1);
         }
         state.authorizedUser.subscriptions = subscriptionsIds;
      },

   },
});

const { setIsLoading, getAuthorizedUser, editSubscribers } = usersSlice.actions;

const getAuthorizedUserData = () => async (dispatch) => {
   const authorizedUser = await getUser("64779e9a885f42b0fbe95c5d");
   dispatch(getAuthorizedUser(authorizedUser));
   dispatch(setIsLoading(false));
};

export { getAuthorizedUserData, editSubscribers, getAuthorizedUser, setIsLoading };

export default usersSlice.reducer;
