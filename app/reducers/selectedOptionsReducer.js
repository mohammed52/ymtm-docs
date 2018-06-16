import { combineReducers } from 'redux';
import * as types from '../types';
import _ from 'lodash';
import MASTER_OPTIONS from '../components/helpers/MASTER_OPTIONS'
import initializeSelectedOptions from './helpers/initializeSelectedOptions'

const selectedOptions = (state = [], action) => {
  switch (action.type) {

    case "SET_SELECTED_OPTIONS": {
      return action.payload;
    }
    default: {
      return state
    }
  }

}

export default selectedOptions
