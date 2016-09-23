import { combineReducers } from 'redux'

import money from './moneyReducer';
import benefits from './benefitsReducer';

export default combineReducers({
  money,
  benefits,
})
