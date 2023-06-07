import { configureStore } from "@reduxjs/toolkit";
import usersReduser from './slices/usersSlice'

export const store = configureStore({
   reducer: {
      users: usersReduser,
   },
});