import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import newRecipeReducer from "./reducer/reducerNews";
import userReducer from "./reducer/reducerUser";
import nutrientReducer from "./reducer/reducerNutrient";
import chatReducer from "./reducer/reducerChatBot";

const rootReducer = combineReducers({
  newsRecipe: newRecipeReducer,
  user: userReducer,
  nutrient: nutrientReducer,
  chat: chatReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.warn("cek state store", store.getState());
});
export default store;
