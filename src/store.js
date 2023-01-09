// to store updated state
import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restaurentListReducer } from "./reducers/restaurentListReducer";

// to hold updated states -use reducers
const reducers = combineReducers({
restListReducer:restaurentListReducer
})
const middleware = [thunk]
const store = createStore(reducers,applyMiddleware(...middleware))
export default store