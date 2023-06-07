import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BtnSubscribe from "./BtnSubscribe";

describe("BtnSubscribe", () => {
   it("renders without crashing", () => {
      render(<BtnSubscribe onClick={() => {}} isTracked={false} />);
   });

   it("renders the correct text when isTracked is false", () => {
      render(<BtnSubscribe onClick={() => {}} isTracked={false} />);
      expect(screen.getByText("Стежити")).toBeInTheDocument();
   });

   it("renders the correct text when isTracked is true", () => {
      render(<BtnSubscribe onClick={() => {}} isTracked={true} />);
      expect(screen.getByText("Відписатись")).toBeInTheDocument();
   });

   it("invokes onClick callback when clicked", () => {
      const onClickMock = jest.fn();
      render(<BtnSubscribe onClick={onClickMock} isTracked={false} />);
      fireEvent.click(screen.getByText("Стежити"));
      expect(onClickMock).toHaveBeenCalled();
   });

   it("adds className prop to button", () => {
      const className = "custom-class";
      render(<BtnSubscribe onClick={() => {}} isTracked={false} className={className} />);
      const button = screen.getByRole("button");
      expect(button).toHaveClass(className);
   });

   it('adds "btn-subscribe--not-tracked" class when isTracked is false', () => {
      render(<BtnSubscribe onClick={() => {}} isTracked={false} />);
      const button = screen.getByRole("button");
      expect(button).toHaveClass("btn-subscribe--not-tracked");
   });

   it('does not add "btn-subscribe--not-tracked" class when isTracked is true', () => {
      render(<BtnSubscribe onClick={() => {}} isTracked={true} />);
      const button = screen.getByRole("button");
      expect(button).not.toHaveClass("btn-subscribe--not-tracked");
   });
});
