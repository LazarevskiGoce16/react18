import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./slices/counterSlice"
import todosReducer from "./slices/todosSlice"
import postsReducer from "./slices/postsSlice"
// import logger from "redux-logger"

// redux extension working by default
export const store = configureStore({
  reducer : {
    counter : counterReducer,
    todos : todosReducer,
    posts : postsReducer
  },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})