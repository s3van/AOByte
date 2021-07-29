import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/content/login/loginSlice';
import booksReducer from "../features/content/books/booksSlice"
import { enableMapSet } from 'immer';

enableMapSet();

export const store = configureStore({
  reducer: {
    login: loginReducer,
    books: booksReducer,
  },
});
