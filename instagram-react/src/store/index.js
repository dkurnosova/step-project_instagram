import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './slices/postsSlice'
import usersReduser from './slices/usersSlice'

export const store = configureStore({
   reducer: {
      posts: postsReducer,
      users: usersReduser,
   },
});