import { render, screen } from "@testing-library/react";
import ContactTable from "../../components/ContactTable";
describe("Test on <ContactTable />", () => {
  it("should be render", () => {
    const handleDelete = jest.fn();
    const setIsOpen = jest.fn();
    const setData = jest.fn();
    const setMood = jest.fn();
    const contacts = [
      {
        id: 1,
        name: "Jeremi",
        phone: "987654123",
      },
    ];
    render(
      <ContactTable
        contacts={contacts}
        handleDelete={handleDelete}
        setIsOpen={setIsOpen}
        setData={setData}
        setMood={setMood}
      />
    );
    expect(screen.getByText("Jeremi")).toBeInTheDocument();
  });
});
