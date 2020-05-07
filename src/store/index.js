import {
    createStore,
    combineReducers,
    applyMiddleware
} from "redux";
import newRecipeReducer from "./reducer/newsReducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    newsRecipe: newRecipeReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.log(store.getState())
})

export default store;