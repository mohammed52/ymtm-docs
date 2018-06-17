import { DEFAULT_SETTINGS } from './defaultSettings'

export default function docsListForApplicationGeneral(applicationDetails) {

  let generalDocList = [];

  // for safai chitti
  if (applicationDetails.AMOUNT > 0) {
    generalDocList.push({
      docName: "Safai Chitti",
      docTemplate: null
    })
  }


  // cnic copies of 2 guarantors
  if (applicationDetails.AMOUNT > 0 &&
    applicationDetails.AMOUNT <= 1500000) {
    generalDocList.push({
      docName: "CNIC Copies and ITS Numbers of 02 Guarantors (Yousufi Mohalla Only)",
      docTemplate: null,
    })
  }

  // cnic copies of 3 guarantors
  if (applicationDetails.AMOUNT > 1500000 &&
    applicationDetails.AMOUNT <= 2500000) {
    generalDocList.push({
      docName: "CNIC Copies and ITS Numbers of 03 Guarantors (Yousufi Mohalla Only)",
      docTemplate: null,
    })
  }

  // personal expenses
  if (applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_ZIARAT ||
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_SCHOOL_UNI_FEES ||
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_PROPERTY_PURCHASE ||
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_CAR_MOTORCYCLE ||
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_JAMAAT_WAJEBAAT_FMB_DUES) {
    generalDocList.push({
      docName: "Personal Expenses",
      docTemplate: null
    })
  }

  // financials
  if (
    applicationDetails.AMOUNT > 500000 &&
    (
    applicationDetails.SOURCE_OF_INCOME === DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_BUSINESS_SOLE_PROP ||
    applicationDetails.SOURCE_OF_INCOME === DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_BUSINESS_PARTNERSHIP
    ) &&
    (
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_EXISTING_BUSINESS ||
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_PROPERTY_PURCHASE
    )) {
    generalDocList.push({
      docName: "Financials (sheet # 6,7,8,9, Shk Burhanuddin Jasden)",
      docTemplate: null
    })
  }

  // NTN returns for last two years
  if ((applicationDetails.SOURCE_OF_INCOME === DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_BUSINESS_PARTNERSHIP ||
    applicationDetails.SOURCE_OF_INCOME === DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_BUSINESS_SOLE_PROP) &&
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_EXISTING_BUSINESS) {

    generalDocList.push({
      docName: "NTN returns for last 2 years (your company accountant)",
      template: null
    })
  }

  // business bank statement for 6 months
  if (applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_EXISTING_BUSINESS) {
    generalDocList.push({
      docName: "Business Bank Statement for last 6 months",
      docTemplate: null
    })
  }

  // personal bank statement
  if (applicationDetails.SOURCE_OF_INCOME === DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_JOB ||
    applicationDetails.SOURCE_OF_INCOME === DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_HOME_BASED_INCOME_TUITION ||
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_ZIARAT ||
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_SCHOOL_UNI_FEES ||
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_PROPERTY_PURCHASE ||
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_CAR_MOTORCYCLE ||
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_JAMAAT_WAJEBAAT_FMB_DUES
  ) {
    generalDocList.push({
      docName: "Personal Bank Statement for last 6 months",
      docTemplate: "null"
    })
  }

  // salary slip
  if (applicationDetails.SOURCE_OF_INCOME === DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_JOB) {
    generalDocList.push({
      docName: "Salary Slip for last month",
      docTemplate: "null"
    })
  }

  return generalDocList;
}
