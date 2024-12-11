import { countReducer } from "../Reducers/countReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    count: countReducer, // Add your reducer(s) here
  },
});

export default store;
