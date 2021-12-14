import { combineReducers } from "redux";

import cartReducer from './cart'
import filterReducer from './filters'
import pizzasReducer from './pizzas'

const rootReducer = combineReducers({
  cart: cartReducer,
  filters: filterReducer,
  pizzas: pizzasReducer
});

export default rootReducer;