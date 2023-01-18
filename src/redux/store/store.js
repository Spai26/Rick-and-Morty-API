import { createStore, applyMiddleware, compose } from "react-redux";
import reducer from "../reducer/reducer";
import ThunkMiddleware from "redux-thunk";

const composeEnchacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const store = createStore(
  reducer,
  composeEnchacer(applyMiddleware(ThunkMiddleware))
);

export default store;
