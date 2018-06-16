import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
// import user from '../reducers/user';
// import topic from '../reducers/topic';
// import message from '../reducers/message';
import selectedOptions from '../reducers/selectedOptionsReducer';
// import * as types from '../types';

// Combine reducers with routeReducer which keeps track of
// router state
const appReducer = combineReducers({
  selectedOptions,
  // contactInfo,
  routing
})

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STORE') {
    state = undefined
  }

  return appReducer(state, action)
};

export default rootReducer;
