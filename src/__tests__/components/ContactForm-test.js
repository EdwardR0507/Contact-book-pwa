import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "../../components/ContactForm";

import { MOODS } from "../../constants";
describe("Test on <ContactForm />", () => {
  const handleAdd = jest.fn();
  const handleEdit = jest.fn();
  const setIsOpen = jest.fn();
  const setup = (data = {}, mood = MOODS.ADD) => {
    render(
      <ContactForm
        handleAdd={handleAdd}
        handleEdit={handleEdit}
        setIsOpen={setIsOpen}
        data={data}
        mood={mood}
      />
    );
  };
  it("should be render", () => {
    setup();
    expect(screen.getByPlaceholderText("Write a name...")).toBeInTheDocument();
  });
  it("should be add a new Contact by handleAdd", () => {
    setup();
    const newContact = {
      id: 2,
      name: "Jeremi",
      phone: "987654123",
    };
    const inputName = screen.getByPlaceholderText("Write a name...");
    fireEvent.change(inputName, { target: { value: newContact.name } });
    const inputPhone = screen.getByPlaceholderText("Write a phone number...");
    fireEvent.change(inputPhone, { target: { value: newContact.phone } });
    fireEvent.click(screen.getByRole("button", { name: "Acept" }));
    expect(handleAdd).toHaveBeenCalledTimes(1);
  });

  it("should be edit a Contact by handleEdit", () => {
    const actualContact = {
      id: 2,
      name: "Jeremi",
      phone: "987654123",
    };
    setup(actualContact, MOODS.EDIT);
    const editContact = {
      id: 2,
      name: "Renato",
      phone: "987654123",
    };
    const inputName = screen.getByPlaceholderText("Write a name...");
    fireEvent.change(inputName, { target: { value: editContact.name } });
    const inputPhone = screen.getByPlaceholderText("Write a phone number...");
    fireEvent.change(inputPhone, { target: { value: editContact.phone } });
    fireEvent.click(screen.getByRole("button", { name: "Acept" }));
    expect(handleEdit).toHaveBeenCalledWith(editContact);
    expect(handleEdit).toHaveBeenCalledTimes(1);
  });

  it("should be close the modal", () => {
    setup();
    fireEvent.click(screen.getByRole("button", { name: "Cancel" }));
    expect(setIsOpen).toHaveBeenCalledWith(false);
  });
});
