import { combineReducers } from 'redux';
import * as types from '../types';
import _ from 'lodash';
import MASTER_OPTIONS from '../components/helpers/MASTER_OPTIONS'
import initializeSelectedOptions from './helpers/initializeSelectedOptions'

const option = (state = {},
  action
) => {
  switch (action.type) {
    case types.SAVE_CATEGORY_OPTION:
      if (state.categoryId === action.data.categoryId) {
        return {
          ...state,
          optionId: action.data.optionId,
          selected: true
        };
      }
      return state;
    default:
      return state;
  }
}

const contactInfo = (state = {},
  action
) => {
  switch (action.type) {
    case types.SAVE_CONTACT_INFO:
      return {
        ...state,
        yourName: action.data.yourName,
        companyName: action.data.companyName,
        email: action.data.email,
        telephone: action.data.telephone
      }
    default:
      return state;
  }
}


const requirementsEmailSentStatus = (state = {
    status: types.REQ_EMAIL_STATUS_NOT_SENT
  },
  action
) => {
  switch (action.type) {
    case types.REQ_EMAIL_STATUS_UPDATE:
      return action.data
    default:
      return state;
  }
}



const options = (state = initializeSelectedOptions(),
  action
) => {
  switch (action.type) {
    case types.SAVE_CATEGORY_OPTION:
      return state.map(t => option(t, action));
    default:
      return state;
  }
};

const selectedOptions = combineReducers({
  options,
  contactInfo,
  requirementsEmailSentStatus // NOT_SENT, INITIATED, SENT, FAILED
});

export default selectedOptions;
