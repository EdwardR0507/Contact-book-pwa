import { ACTIONS } from "../utils/actions";
export const contactReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, payload],
      };
    case ACTIONS.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== payload),
      };
    case ACTIONS.EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === payload.id ? payload : contact
        ),
      };
    default:
      return state;
  }
};
