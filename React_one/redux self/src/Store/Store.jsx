import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slices/CounterSlice";
import userReducer from "../Slices/UserSlice";
import themeReducer from "../Slices/ThemeSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    theme: themeReducer,
  },
});

export default store;
