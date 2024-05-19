import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books";
import userReducer from "./user";
export const store = configureStore({
  reducer: { books: booksReducer, user: userReducer },
});
