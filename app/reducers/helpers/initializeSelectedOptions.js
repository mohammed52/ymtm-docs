import * as types from '../../types';
import {MASTER_OPTIONS} from '../../components/helpers/MASTER_OPTIONS'

export default function initializeSelectedOptions() {

  let tmpInitialSelectedOptions = []

  for (var i = 0; i < MASTER_OPTIONS.length; i++) {

    tmpInitialSelectedOptions.push(
      {
        selected: false,
        categoryId: MASTER_OPTIONS[i].categoryId,
        optionId: null

      }
    )
  }

  return tmpInitialSelectedOptions
}
