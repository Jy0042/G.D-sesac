// 여러개의 reducer 를 하나로 묶어줌
import { combineReducers } from "@reduxjs/toolkit";
// import { countReducer } from "./modules/counterReducer";
import { isLoggedInReducer } from "./modules/isLoggedInReducer";
import { bankReducer } from "./modules/bankReducer";
import countReducer from "./modules/countSlice";

// combineReducers : 여러개의 reducer를 하나로 묶어줌

const rootReducer = combineReducers({
  count: countReducer,
  isLoggedIn: isLoggedInReducer,
  money: bankReducer,
});

export default rootReducer;