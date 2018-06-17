import { DEFAULT_SETTINGS } from '../containers/helpers/defaultSettings'

let initialState = {
  PURPOSE: DEFAULT_SETTINGS.PURPOSE.TAG_EXISTING_BUSINESS,
  AMOUNT: 1000000,
  SOURCE_OF_INCOME: DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_BUSINESS_SOLE_PROP,
  REPEAT_APPLY: DEFAULT_SETTINGS.REPEAT_APPLY.TAG_FIRST_TIME_APPLY
};

const selectedOptions = (state = initialState, action) => {
  console.log("action.type", action.type);
  console.log("action.payload", action.payload);
  switch (action.type) {


    case "SET_PURPOSE": {
      console.log("action.type", action.type);
      console.log("action.payload", action.payload);
      console.log("state", state);
      let returnObj = {
        ...state,
        PURPOSE: action.payload
      }
      console.log("returnObj", returnObj);
      return returnObj;
    }
    case "SET_SOURCE_OF_INCOME": {
      return {
        ...state,
        SOURCE_OF_INCOME: action.payload
      };
    }
    case "SET_REPEAT_APPLY": {
      return {
        ...state,
        REPEAT_APPLY: action.payload
      };
    }
    case "SET_AMOUNT": {
      return {
        ...state,
        AMOUNT: action.payload
      };
    }
    default: {
      return state
    }
  }
}

export default selectedOptions
