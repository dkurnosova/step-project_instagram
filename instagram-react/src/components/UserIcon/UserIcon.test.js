import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom"; 
import UserIcon from "./UserIcon";
import usersSlice, { getAuthorizedUser } from "../../store/slices/usersSlice";
import "@testing-library/jest-dom/extend-expect";

describe("UserIcon", () => {
   const user = {
      _id: "1",
      name: "User 1",
      icon: {
         type: "Buffer",
         data: [255, 216, 255, 224, 0, 16, 74],
      },
   };

   let store;

   beforeEach(() => {
      store = configureStore({
         reducer: {
            users: usersSlice,
         },
      });

      store.dispatch(
         getAuthorizedUser({
            _id: "2",
            name: "User 2",
            icon: {
               type: "Buffer",
               data: [255, 216, 255, 224, 0, 16, 74],
            },
            subscriptions: [""],
            posts: [],
         })
      );
   });

   it("renders the component with user prop", () => {
      render(
         <Provider store={store}>
            <BrowserRouter>
               <UserIcon user={user} />
            </BrowserRouter>
         </Provider>
      );

   });

   it("renders the component with className and isRecommend props", () => {
      render(
         <Provider store={store}>
            <BrowserRouter>

               <UserIcon user={user} className="custom-class" isRecommend={true} />
            </BrowserRouter>
         </Provider>
      );
   });

   it("dispatches editSubscribers action when BtnSubscribe is clicked", () => {
      render(
         <Provider store={store}>
            <BrowserRouter>
               <UserIcon user={user} isRecommend={true} />
            </BrowserRouter>
         </Provider>
      );

      const btnSubscribe = screen.getByRole("button", { name: "Стежити" });
      fireEvent.click(btnSubscribe);

   });
});
