import { combineReducers } from "redux";
import studentReducer from "./studentReducer/studentReducer";

const rootReducer = combineReducers({
  student: studentReducer,
});

export default rootReducer;
