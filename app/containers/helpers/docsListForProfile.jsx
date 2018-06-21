import { DEFAULT_SETTINGS } from './defaultSettings'
import { DOCS_LIST } from './docsList'

export default function docsListForProfile(applicationDetails) {
  let profileDocsList = [];

  // for cnic, no template docs for profile docs
  if (applicationDetails.AMOUNT > 0) {
    profileDocsList.push(DOCS_LIST.DOC_CNIC_COPY);
  }

  // for Partnership Deed
  if (applicationDetails.SOURCE_OF_INCOME === DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_BUSINESS_PARTNERSHIP && (
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_EXISTING_BUSINESS ||
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_NEW_BUSINESS)) {
    profileDocsList.push(DOCS_LIST.DOC_PARTNERSHIP_DEED);

    // its numbers of all partners
    profileDocsList.push(DOCS_LIST.DOC_ITS_BUSINESS_PARTNERS);
  }

  // Business NTN certificate
  if (applicationDetails.AMOUNT >= 300000 &&
    (applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_EXISTING_BUSINESS ||
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_NEW_BUSINESS)) {
    profileDocsList.push(DOCS_LIST.DOC_BUSINESS_NTN);
  }

  // business bank account cheque copy
  if (applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_EXISTING_BUSINESS ||
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_NEW_BUSINESS) {
    profileDocsList.push(DOCS_LIST.DOC_BUSINESS_CHEQUE);
  }

  // personal bank account cheque copy
  if (applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_ZIARAT ||
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_SCHOOL_UNI_FEES ||
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_PROPERTY_PURCHASE ||
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_CAR_MOTORCYCLE ||
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_JAMAAT_WAJEBAAT_FMB_DUES
  ) {
    profileDocsList.push(DOCS_LIST.DOC_PERSONAL_CHEQUE);
  }


  return profileDocsList;
}
