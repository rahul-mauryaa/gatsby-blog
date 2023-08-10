import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slice/todoSlice";

const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
  // You can also add middleware, dev tools configuration, etc. here
});

export default store;
