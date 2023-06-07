import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PostImg from "./PostImg";
import decodeImageData from "../../assets/decodeImageData";
import "@testing-library/jest-dom/extend-expect";

describe("PostImg", () => {
   const post = {
      photo: {
         type: "Buffer",
         data: [
            255, 216, 255, 224, 0, 16, 74, 70, 73, 70, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 255, 237, 0, 132, 80, 104, 111,
            116, 111, 115, 104, 111, 112, 32, 51,
         ],
      },
      likes: ["user1", "user2"],
      comments: ["comment1", "comment2"],
   };
   const setIsOpenModal = jest.fn();
   const setModalData = jest.fn();

   beforeEach(() => {
      setIsOpenModal.mockClear();
      setModalData.mockClear();
   });

   it("renders the post image with the correct source", () => {
      render(<PostImg post={post} setIsOpenModal={setIsOpenModal} setModalData={setModalData} />);

      const image = screen.getByAltText("post");
      expect(image).toBeInTheDocument();
      expect(image.src).toBe(decodeImageData(post.photo)); 
   });

   it("calls setModalData and setIsOpenModal functions when the overlay is clicked", () => {
      render(<PostImg post={post} setIsOpenModal={setIsOpenModal} setModalData={setModalData} />);

      const overlay = screen.getByTestId("post-img-overlay");
      fireEvent.click(overlay);

      expect(setModalData).toHaveBeenCalledTimes(1);
      expect(setModalData).toHaveBeenCalledWith(post);
      expect(setIsOpenModal).toHaveBeenCalledTimes(1);
      expect(setIsOpenModal).toHaveBeenCalledWith(true);
   });

   it("renders the correct number of likes", () => {
      render(<PostImg post={post} setIsOpenModal={setIsOpenModal} setModalData={setModalData} />);

      const likesCountElements = screen.getAllByText(post.likes.length.toString());
      expect(likesCountElements).toHaveLength(post.likes.length);
   });

   it("renders the correct number of comments", () => {
      render(<PostImg post={post} setIsOpenModal={setIsOpenModal} setModalData={setModalData} />);

      const commentsCountElements = screen.getAllByText(post.comments.length.toString());
      expect(commentsCountElements).toHaveLength(post.comments.length);
   });
});
