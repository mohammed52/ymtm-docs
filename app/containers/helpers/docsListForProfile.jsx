import { DEFAULT_SETTINGS } from './defaultSettings'

export default function docsListForProfile(applicationDetails) {
  let profileDocsList = [];

  //for cnic, no template docs for profile docs
  if (applicationDetails.AMOUNT > 0) {
    profileDocsList.push({
      docName: "CNIC Copy",
    })
  }

  // for Partnership Deed
  if (applicationDetails.SOURCE_OF_INCOME == DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_BUSINESS_PARTNERSHIP) {
    profileDocsList.push({
      docName: "Partnership Deed of Business (For partnership business)"
    });

    // its numbers of all partners
    profileDocsList.push({
      docName: "ITS Numbers of All Business Partners (For partnership business)"
    })
  }

  // Business NTN certificate
  if (applicationDetails.AMOUNT > 300000 &&
    (applicationDetails.SOURCE_OF_INCOME === DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_BUSINESS_PARTNERSHIP ||
    applicationDetails.SOURCE_OF_INCOME === DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_BUSINESS_SOLE_PROP)) {
    profileDocsList.push({
      docName: "Business NTN Certificate"
    })
  }

  // business bank account cheque copy
  if (applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_EXISTING_BUSINESS ||
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_NEW_BUSINESS) {
    profileDocsList.push({
      docName: "Business Bank Account Cheque Copy"
    })
  }

  // personal bank account cheque copy
  if (applicationDetails.SOURCE_OF_INCOME === DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_JOB ||
    applicationDetails.SOURCE_OF_INCOME === DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_HOME_BASED_INCOME_TUITION ||
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_ZIARAT ||
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_SCHOOL_UNI_FEES ||
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_PROPERTY_PURCHASE ||
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_CAR_MOTORCYCLE ||
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_JAMAAT_WAJEBAAT_FMB_DUES
  ) {
    profileDocsList.push({
      docName: "Personal Bank Account Cheque Copy"
    })
  }


  return profileDocsList;
}
