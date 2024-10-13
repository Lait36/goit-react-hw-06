import { configureStore } from "@reduxjs/toolkit";

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
  return state;
};

export const store = configureStore({
  reducer: rootReducer,
});
