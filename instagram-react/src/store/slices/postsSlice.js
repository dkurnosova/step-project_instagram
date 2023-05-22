import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
   name: "posts",
   initialState: {
      posts: [],
      isLoading: true,
   },
   reducers: {
      getPosts: (state, action) => {
         state.posts = action.payload;
      },
      setIsLoading: (state, action) => {
         state.isLoading = action.payload;
      },
   },
});

const { getPosts, setIsLoading } = postsSlice.actions;

const getPostsAsync = () => async (dispatch) => {
   let posts = await fetch(`${process.env.REACT_APP_API_URL}posts`)
      .then((res) => res.json())
      .then(({ data }) => data)

    dispatch(getPosts(posts));
    dispatch(setIsLoading(false));
};

export { getPostsAsync };

export default postsSlice.reducer;
