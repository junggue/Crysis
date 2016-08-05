import { combineReducers } from 'redux';
import employeesReducer from './reducer-employees';

const rootReducer = combineReducers({
  employees: employeesReducer
})

export default rootReducer;
