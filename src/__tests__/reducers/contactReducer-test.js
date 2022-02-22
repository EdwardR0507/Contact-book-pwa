import { contactReducer } from "../../reducers/contactReducer";
import { ACTIONS } from "../../constants";
describe("Test on contactReducer", () => {
  const mockContacts = [
    {
      id: 1,
      name: "Edward",
      phone: "941650012",
    },
  ];
  it("should return the initial state", () => {
    const state = contactReducer(mockContacts, {});
    expect(state).toEqual(mockContacts);
  });
  it("should be add a new contact", () => {
    const newContact = {
      id: 2,
      name: "Junior",
      phone: "941650012",
    };
    const action = { type: ACTIONS.ADD_CONTACT, payload: newContact };
    const state = contactReducer(mockContacts, action);
    expect(state.length).toBe(2);
    expect(state).toEqual([...mockContacts, action.payload]);
  });

  it("should be delete a contact", () => {
    const action = { type: ACTIONS.DELETE_CONTACT, payload: 1 };
    const state = contactReducer(mockContacts, action);
    expect(state.length).toBe(0);
    expect(state).toEqual([]);
  });

  it("should be edit a contact", () => {
    const editedContact = {
      id: 1,
      name: "Junior",
      phone: "941650012",
    };
    const action = { type: ACTIONS.EDIT_CONTACT, payload: editedContact };
    const state = contactReducer(mockContacts, action);
    expect(state.length).toBe(1);
    expect(state).toEqual([editedContact]);
  });
});
