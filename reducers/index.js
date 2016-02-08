import { combineReducers } from 'redux';
import TimeTableReducer from './reducer_getTimeTable';

const rootReducer = combineReducers({
  timeTable: TimeTableReducer
});

export default rootReducer;
