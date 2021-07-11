import { createStore, combineReducers } from 'redux';
import poolReducer from "./reducers/poolReducer"

const reducer = combineReducers({
  poolState: poolReducer,
})

const store = createStore(reducer)

window.store = store;
export default store;