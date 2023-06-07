import { render, screen } from "@testing-library/react";
import Preloader from "./Preloader";
import "@testing-library/jest-dom/extend-expect";

describe("Preloader", () => {
   it("renders without errors", () => {
      render(<Preloader />);
   });

   it("has the correct class", () => {
      render(<Preloader />);
      const preloader = screen.getByTestId("preloader");
      expect(preloader).toHaveClass("preloader");
   });

   it("contains a loader element", () => {
      render(<Preloader />);
      const loader = screen.getByTestId("loader");
      expect(loader).toBeInTheDocument();
   });
});
