import { combineReducers } from "redux";

import cartReducer from './cart'
import filterReducer from './filter'
import pizzasReducer from './pizzas'

const rootReducer = combineReducers({
  cart: cartReducer,
  filter: filterReducer,
  pizzas: pizzasReducer
});

export default rootReducer;