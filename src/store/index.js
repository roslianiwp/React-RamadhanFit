import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
// import moviesReducer from "./reducer/reducerMovie";
import userReducer from "./reducer/reducerUser";

const rootReducer = combineReducers({
  //   movies: moviesReducer,
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.warn("cek state store", store.getState());
});
export default store;
