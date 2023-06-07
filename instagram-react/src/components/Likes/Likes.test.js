import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Likes from "./Likes";

describe("Likes", () => {
   const likes = ["user1", "user2", "user3"];
   const changeIsLiked = jest.fn();
   let isLiked = false;

   beforeEach(() => {
      changeIsLiked.mockClear();
   });

   it("renders the correct number of likes", () => {
      render(<Likes likes={likes} changeIsLiked={changeIsLiked} isLiked={isLiked} />);

      const likeCounter = screen.getByText(`Позначки «Подобається»: ${likes.length}`);
      expect(likeCounter).toBeInTheDocument();
   });

   it("renders the not liked icon when isLiked is false", () => {
      render(<Likes likes={likes} changeIsLiked={changeIsLiked} isLiked={isLiked} />);

      const notLikedIcon = screen.getByRole("img", { class: "like-img--not-liked" });
      expect(notLikedIcon).toBeInTheDocument();
   });

   it("renders the liked icon when isLiked is true", () => {
      isLiked = true;
      render(<Likes likes={likes} changeIsLiked={changeIsLiked} isLiked={isLiked} />);

      const likedIcon = screen.getByRole("img", { class: "like-img--liked" });
      expect(likedIcon).toBeInTheDocument();
   });

   it("calls changeIsLiked function when the icon is clicked", () => {
      render(<Likes likes={likes} changeIsLiked={changeIsLiked} isLiked={isLiked} />);

      const icon = screen.getByRole("img");
      userEvent.click(icon);

      expect(changeIsLiked).toHaveBeenCalledTimes(1);
   });
});
