import React, { Component } from 'react';
import { MASTER_OPTIONS } from '../../components/helpers/MASTER_OPTIONS';
import ImageCategoryComponent from '../../components/ImageCategoryComponent';
// import { setSelectedOption } from '../../actions/selectedOptionsActions';

import * as types from '../../types'

export default (selectedOptions) => {
  let allSelected = true;

  for (var i = 0; i < selectedOptions.length; i++) {
    if (!selectedOptions[i].selected) {
      allSelected = false
    }
  }
  return allSelected
}

