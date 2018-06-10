// import crypto from './crypto'
import { push } from 'react-router-redux';
import { selectedOptionsService } from '../services';
import { ObjectID } from 'bson';

import * as types from '../types';

export function resetStore() {
  return {
    type: types.RESET_STORE
  }
}

function updateRequirementEmailStatus(emailStatus) {
  return {
    type: types.REQ_EMAIL_STATUS_UPDATE,
    data: {
      status: emailStatus
    }
  }
}

function setOption(categoryId, optionId, index) {
  return {
    type: types.SAVE_CATEGORY_OPTION,
    data: {
      categoryId,
      optionId,
      index
    }
  };
}

function setContactInfo(yourName, companyName, email, telephone) {
  return {
    type: types.SAVE_CONTACT_INFO,
    data: {
      yourName,
      companyName,
      email,
      telephone,
      categoryId: types.CAT_CONTACT_ID
    }
  }
}

export function setSelectedOption(categoryId, optionId, index) {
  return (dispatch) => {
    dispatch(setOption(categoryId, optionId, index));
  };

}

export function saveOptionsAndContact(yourName, companyName, email, telephone, selectedOptions) {
  return (dispatch, getState) => {

    let data = getState().selectedOptions
    const contactInfo = {
      yourName,
      companyName,
      email,
      telephone
    }
    data.contactInfo = contactInfo

    const idObj = new ObjectID();
    data.id = idObj.toString();

    selectedOptionsService().createSelectedOptionsRequest({
      data
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("success");
        // We can actually dispatch a CREATE_TOPIC_SUCCESS
        // on success, but I've opted to leave that out
        // since we already did an optimistic update
        // We could return res.json();
        // return dispatch(createTopicSuccess());
        }
      })
      .catch((res) => {

        console.log("failure", res);
      // return dispatch(createTopicFailure({
      //   id,
      //   error: 'Oops! Something went wrong and we couldn\'t create your topic'
      // }));
      });

    // return selectedOptionsService().
    dispatch(setContactInfo(yourName, companyName, email, telephone));
    dispatch(updateRequirementEmailStatus(types.REQ_EMAIL_STATUS_SENT));
  };

}
