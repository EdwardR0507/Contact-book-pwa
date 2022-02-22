import { fireEvent, render, screen } from "@testing-library/react";
import ContactSearch from "../../components/ContactSearch";

describe("Test on <ContactSearch />", () => {
  it("should be render", () => {
    render(<ContactSearch />);
    expect(
      screen.getByPlaceholderText("🔍 Search Contacts by name...")
    ).toBeInTheDocument();
  });

  it("should be search a Contact by name", () => {
    const setSearch = jest.fn();
    render(<ContactSearch search={""} setSearch={setSearch} />);
    const inputName = screen.getByPlaceholderText(
      "🔍 Search Contacts by name..."
    );
    fireEvent.change(inputName, { target: { value: "Jeremi" } });
    fireEvent.keyDown(inputName, { key: "Enter" });
    expect(setSearch).toHaveBeenCalledWith("Jeremi");
  });
});
