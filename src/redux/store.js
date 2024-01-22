import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
const middleWare = [thunk];

// create store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
