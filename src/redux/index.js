import { combineReducers, createStore } from "redux";
import { cartReducer } from "./reducers/cartReducer";

const allReducer = combineReducers({
    cart: cartReducer,
});

const store = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store
