
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import newRecipeReducer from "./reducer/newsReducer";
import userReducer from "./reducer/reducerUser";

const rootReducer = combineReducers({
  newsRecipe: newRecipeReducer
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.warn("cek state store", store.getState());
});
export default store;
