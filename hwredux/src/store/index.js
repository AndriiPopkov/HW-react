import { applyMiddleware, combineReducers, createStore } from "redux";
import { basketReducer } from "./basketReducer";
import {thunk} from 'redux-thunk'

const rootReducer = combineReducers({
  cards: basketReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));