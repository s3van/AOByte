import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/content/login/loginSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
