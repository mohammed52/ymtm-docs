import React, { Component } from 'react';
import { MASTER_OPTIONS } from '../../components/helpers/MASTER_OPTIONS';
import ImageCategoryComponent from '../../components/ImageCategoryComponent';
// import { setSelectedOption } from '../../actions/selectedOptionsActions';

import * as types from '../../types'

export default (selectedOptionsArray, setSelectedOption) => {
  let componentsArr = []

  for (var i = 0; i < MASTER_OPTIONS.length; i++) {
    const category = MASTER_OPTIONS[i]
    switch (category.categoryType) {
      case types.CAT_TYPE_IMAGE_SELECTION: {
        componentsArr.push(<ImageCategoryComponent key={"componentsArr" + "ImageCategoryComponent" + i} category={category} setSelectedOption={setSelectedOption} />);
        break;
      }
      case types.CAT_TYPE_CONTACT_DETAILS: {
        // if (selectedOptionsArray) {}
        componentsArr.push(<div key={"componentsArr" + "CategoryContactDetailsComponent" + i}>
                             Contact Component
                           </div>)

      }
      default:
        break;
    }
  }
  return componentsArr
}

