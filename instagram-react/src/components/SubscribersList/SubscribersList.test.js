import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import "@testing-library/jest-dom/extend-expect";
import SubscribersList from "./SubscribersList";
import usersSlice, { getAuthorizedUser } from "../../store/slices/usersSlice";

describe("SubscribersList", () => {
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
   it("should render list of user icons", () => {
      const userArray = [
         {
            _id: "1",
            name: "User 1",
            icon: {
               type: "Buffer",
               data: [255, 216, 255, 224, 0, 16, 74],
            },
         },
         {
            _id: "2",
            name: "User 2",
            icon: {
               type: "Buffer",
               data: [255, 216, 255, 224, 0, 16, 74],
            },
         },
         {
            _id: "3",
            name: "User 3",
            icon: {
               type: "Buffer",
               data: [255, 216, 255, 224, 0, 16, 74],
            },
         },
      ];

      render(
         <Provider store={store}>
            <BrowserRouter>
               <SubscribersList userArray={userArray} />
            </BrowserRouter>
         </Provider>
      );

      expect(screen.getByText("Ваші підписки:")).toBeInTheDocument();

      const userIcons = screen.getAllByTestId("user-icon-small");
      expect(userIcons.length).toBe(userArray.length);
   });

   it("should render recommended users title", () => {
      const userArray = [
         {
            _id: "1",
            name: "User 1",
            icon: {
               type: "Buffer",
               data: [255, 216, 255, 224, 0, 16, 74],
            },
         },
      ];
      const isRecommend = true;

      render(
         <Provider store={store}>
            <BrowserRouter>
               <SubscribersList userArray={userArray} isRecommend={isRecommend} />
            </BrowserRouter>
         </Provider>
      );

      expect(screen.getByText("Рекомендовані для вас:")).toBeInTheDocument();
   });
});
