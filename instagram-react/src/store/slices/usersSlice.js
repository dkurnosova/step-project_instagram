import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
   name: "users",
   initialState: {
      users: [],
      isLoading: true,
      authorizedUser: "646a232b37584db1551d13e9",
   },
    reducers: {
        getUsers: (state, action) => {
            state.users = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    }
});

const { getUsers, setIsLoading } = usersSlice.actions;

const getUsersAsync = () => async (dispatch) => {
   let users = await fetch(`${process.env.REACT_APP_API_URL}users`)
      .then((res) => res.json())
      .then(({ data }) => data);
    dispatch(getUsers(users));
    dispatch(setIsLoading(false))
};

export { getUsersAsync };

export default usersSlice.reducer;
