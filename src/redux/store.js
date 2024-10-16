import { configureStore } from "@reduxjs/toolkit";

export const addContact = (newContact) => {
  return {
    type: "contacts/add",
    payload: newContact,
  };
};

export const deleteContact = (contactId) => {
  return {
    type: "contacts/delete",
    payload: contactId,
  };
};

const initialState = {
  contacts: {
    items: [
      { name: "Rosie Simpson", number: "459-12-56", id: "id-1" },
      { name: "Hermione Kline", number: "443-89-12", id: "id-2" },
      { name: "Eden Clements", number: "645-17-79", id: "id-3" },
      { name: "Annie Copeland", number: "227-91-26", id: "id-4" },
    ],
  },
  filters: {
    name: "",
  },
};

const rootReducer = (state = initialState, action) => {
  // Редюсер розрізняє екшени за значенням властивості type
  switch (action.type) {
    case "contacts/add": {
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, action.payload],
        },
      };
    }
    case "contacts/delete":
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter((contacts) => contacts.id !== action.payload),
        },
      };
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReducer,
});
