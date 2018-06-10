import * as types from '../../types';

export function optionIsSelectedInCategory(categoryId, optionId, selectedOptions) {

  if (selectedOptions[categoryId] == optionId) {
    return true
  }

  return false


}