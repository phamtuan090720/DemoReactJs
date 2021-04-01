import { combineReducers } from "redux";
import userReducer from "./../../usermanagement-redux/modules/reducer";

const rootReducer = combineReducers({
  //key:  value
  userReducer, //userReducer: userReducer
});

export default rootReducer;
