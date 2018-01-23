import { combineReducers } from 'redux'
import coreFunctionality from './core-functionality'

export const rootReducer = combineReducers(coreFunctionality.reduce((acc, functionality) => (functionality.reducer ? {
  ...acc,
  [functionality.name]: functionality.reducer
} : acc), {}))