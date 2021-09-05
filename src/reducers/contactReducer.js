import { ACTIONS } from "../constants";
export const contactReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.ADD_CONTACT:
      return [...state, payload];

    case ACTIONS.DELETE_CONTACT:
      return state.filter((contact) => contact.id !== payload);

    case ACTIONS.EDIT_CONTACT:
      return state.map((contact) => {
        return contact.id === payload.id ? payload : contact;
      });

    default:
      return state;
  }
};
