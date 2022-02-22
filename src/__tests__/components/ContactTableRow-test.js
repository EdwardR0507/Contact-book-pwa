import { fireEvent, render, screen } from "@testing-library/react";
import ContactTableRow from "../../components/ContactTableRow";
describe("Test on <ContactTableRow />", () => {
  const handleDelete = jest.fn();
  const setIsOpen = jest.fn();
  const setData = jest.fn();
  const setMood = jest.fn();
  const setup = () => {
    const contact = {
      id: 1,
      name: "Jeremi",
      phone: "987654123",
    };
    render(
      <ContactTableRow
        contact={contact}
        handleDelete={handleDelete}
        setIsOpen={setIsOpen}
        setData={setData}
        setMood={setMood}
      />
    );
  };
  it("should be render", () => {
    setup();
    expect(screen.getByText("Jeremi")).toBeInTheDocument();
  });

  it("should be set data to edit", () => {
    setup();
    const button = screen.getByRole("button", { name: "Edit" });
    fireEvent.click(button);
    expect(setData).toHaveBeenCalledWith({
      id: 1,
      name: "Jeremi",
      phone: "987654123",
    });
  });

  it("should be set the id of contact that will be delete", () => {
    setup();
    const button = screen.getByRole("button", { name: "Delete" });
    fireEvent.click(button);
    expect(handleDelete).toHaveBeenCalledWith(1);
  });
});
