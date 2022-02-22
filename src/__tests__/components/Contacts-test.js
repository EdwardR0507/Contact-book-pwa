import { fireEvent, render, screen } from "@testing-library/react";
import Contacts from "../../components/Contacts";

describe("Test on <Contacts />", () => {
  it("should be render", () => {
    render(<Contacts />);
    expect(screen.getByText("Add Contact")).toBeInTheDocument();
  });
  it("should be open the modal", () => {
    render(<Contacts />);
    const button = screen.getByRole("button", { name: "Add Contact" });
    fireEvent.click(button);
    expect(screen.getByText("New Contact")).toBeInTheDocument();
  });
});
