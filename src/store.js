import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./slices/counterSlice"
// import logger from "redux-logger"

// redux extension working by default
export const store = configureStore({
  reducer : {
    counter : counterReducer
  },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})