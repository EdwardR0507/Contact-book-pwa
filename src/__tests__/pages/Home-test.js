import { render, screen } from "@testing-library/react";
import Home from "../../pages/Home";

describe("Test on <Home />", () => {
  it("should be render", () => {
    render(<Home />);
    expect(screen.getByText("React Contact Book")).toBeInTheDocument();
  });
});
