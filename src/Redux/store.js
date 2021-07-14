//IMPORT REDUX TOOLS
import { createStore, combineReducers } from 'redux';

//IMPORT COMPONENTS
import poolReducer from "./reducers/poolReducer"
import searchReducer from "./reducers/searchReducer"

const reducer = combineReducers({
  poolState: poolReducer,
  searchState: searchReducer
})

const store = createStore(reducer)

window.store = store;
export default store;

