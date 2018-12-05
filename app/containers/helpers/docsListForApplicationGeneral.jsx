import { DEFAULT_SETTINGS } from "./defaultSettings";
import { DOCS_LIST } from "./docsList";

export default function docsListForApplicationGeneral(applicationDetails) {
  let generalDocList = [];

  // for safai chitti
  if (applicationDetails.AMOUNT > 0) {
    generalDocList.push(DOCS_LIST.DOC_SAFAI_CHITTI);
  }

  // cnic copies of 2 guarantors
  if (applicationDetails.AMOUNT > 0 && applicationDetails.AMOUNT <= 1500000) {
    generalDocList.push(DOCS_LIST.DOC_GUARANTOR_CNIC_2);
  }

  // cnic copies of 3 guarantors
  if (
    applicationDetails.AMOUNT > 1500000 &&
    applicationDetails.AMOUNT <= 2500000
  ) {
    generalDocList.push(DOCS_LIST.DOC_GUARANTOR_CNIC_3);
  }

  // personal expenses
  if (
    applicationDetails.AMOUNT <= 2500000 &&
    applicationDetails.AMOUNT >= 1000000 &&
    (applicationDetails.SOURCE_OF_INCOME ===
      DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_JOB ||
      applicationDetails.SOURCE_OF_INCOME ===
        DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_HOME_BASED_INCOME_TUITION) &&
    (applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_ZIARAT ||
      applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_TRAVEL ||
      applicationDetails.PURPOSE ===
        DEFAULT_SETTINGS.PURPOSE.TAG_SCHOOL_UNI_FEES ||
      applicationDetails.PURPOSE ===
        DEFAULT_SETTINGS.PURPOSE.TAG_PROPERTY_PURCHASE ||
      applicationDetails.PURPOSE ===
        DEFAULT_SETTINGS.PURPOSE.TAG_CAR_MOTORCYCLE ||
      applicationDetails.PURPOSE ===
        DEFAULT_SETTINGS.PURPOSE.TAG_JAMAAT_WAJEBAAT_FMB_DUES ||
      applicationDetails.PURPOSE ===
        DEFAULT_SETTINGS.PURPOSE.TAG_PERSONAL_WEDDING ||
      applicationDetails.PURPOSE ===
        DEFAULT_SETTINGS.PURPOSE.TAG_HOME_RENOVATION)
  ) {
    generalDocList.push(DOCS_LIST.DOC_PERSONAL_EXPENSES);
  }

  // personal expenses for new business and existing business
  if (
    applicationDetails.AMOUNT < 1000000 &&
    (applicationDetails.SOURCE_OF_INCOME ===
      DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_JOB ||
      applicationDetails.SOURCE_OF_INCOME ===
        DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_HOME_BASED_INCOME_TUITION ||
      applicationDetails.SOURCE_OF_INCOME ===
        DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_BUSINESS_SOLE_PROP ||
      applicationDetails.SOURCE_OF_INCOME ===
        DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_BUSINESS_PARTNERSHIP) &&
    (applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_NEW_BUSINESS ||
      applicationDetails.PURPOSE ===
        DEFAULT_SETTINGS.PURPOSE.TAG_EXISTING_BUSINESS)
  ) {
    generalDocList.push(DOCS_LIST.DOC_PERSONAL_EXPENSES);
  }

  // financials
  if (
    applicationDetails.AMOUNT >= 1000000 &&
    (applicationDetails.SOURCE_OF_INCOME ===
      DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_BUSINESS_SOLE_PROP ||
      applicationDetails.SOURCE_OF_INCOME ===
        DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_BUSINESS_PARTNERSHIP)
  ) {
    generalDocList.push(DOCS_LIST.DOC_FINANCIALS);
  }
  // test comment
  // NTN returns for last two years
  if (
    applicationDetails.AMOUNT >= 1000000 &&
    (applicationDetails.SOURCE_OF_INCOME ===
      DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_BUSINESS_PARTNERSHIP ||
      applicationDetails.SOURCE_OF_INCOME ===
        DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_BUSINESS_SOLE_PROP)
  ) {
    generalDocList.push(DOCS_LIST.DOC_NTN_RETURNS);
  }

  // business bank statement for 6 months
  if (
    applicationDetails.SOURCE_OF_INCOME ===
      DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_BUSINESS_PARTNERSHIP ||
    applicationDetails.SOURCE_OF_INCOME ===
      DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_BUSINESS_SOLE_PROP
  ) {
    generalDocList.push(DOCS_LIST.DOC_BUSINESS_BANK_STATEMENT);
  }

  // personal bank statement
  if (
    (applicationDetails.SOURCE_OF_INCOME ===
      DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_JOB ||
      applicationDetails.SOURCE_OF_INCOME ===
        DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_HOME_BASED_INCOME_TUITION) &&
    (applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_ZIARAT ||
      applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_TRAVEL ||
      applicationDetails.PURPOSE ===
        DEFAULT_SETTINGS.PURPOSE.TAG_PERSONAL_WEDDING ||
      applicationDetails.PURPOSE ===
        DEFAULT_SETTINGS.PURPOSE.TAG_SCHOOL_UNI_FEES ||
      applicationDetails.PURPOSE ===
        DEFAULT_SETTINGS.PURPOSE.TAG_PROPERTY_PURCHASE ||
      applicationDetails.PURPOSE ===
        DEFAULT_SETTINGS.PURPOSE.TAG_CAR_MOTORCYCLE ||
      applicationDetails.PURPOSE ===
        DEFAULT_SETTINGS.PURPOSE.TAG_JAMAAT_WAJEBAAT_FMB_DUES ||
      applicationDetails.PURPOSE ===
        DEFAULT_SETTINGS.PURPOSE.TAG_NEW_BUSINESS ||
      applicationDetails.PURPOSE ===
        DEFAULT_SETTINGS.PURPOSE.TAG_HOME_RENOVATION)
  ) {
    generalDocList.push(DOCS_LIST.DOC_PERSONAL_BANK_STATEMENT);
  }

  // salary slip
  if (
    applicationDetails.SOURCE_OF_INCOME ===
    DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_JOB
  ) {
    generalDocList.push(DOCS_LIST.DOC_SALARY_SLIP);
  }

  return generalDocList;
}
