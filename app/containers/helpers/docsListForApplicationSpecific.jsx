import { DEFAULT_SETTINGS } from "./defaultSettings";
import { DOCS_LIST } from "./docsList";

export default function docsListForApplicationSpecific(applicationDetails) {
  let specificDocList = [];

  // business expansion plan
  if (
    applicationDetails.PURPOSE ===
    DEFAULT_SETTINGS.PURPOSE.TAG_EXISTING_BUSINESS
    ) {
    specificDocList.push(DOCS_LIST.DOC_BUSINESS_EXPANSION_PLAN);
}

  // new business plan
  if (
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_NEW_BUSINESS
    ) {
    specificDocList.push(DOCS_LIST.DOC_NEW_BUSINESS_PLAN);
}

  // application for qardan hasana for ziarat
  if (applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_ZIARAT) {
    specificDocList.push(DOCS_LIST.DOC_APP_FOR_ZIARAT);

    specificDocList.push(DOCS_LIST.DOC_ZIARAT_PAYMENT_CHALLAN);
  }
  // application for qardan hasana for travel
  if (applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_TRAVEL) {
    specificDocList.push(DOCS_LIST.DOC_APP_FOR_TRAVEL);
  }
  // application for qardan hasana for PERSONAL / TRAVEL
  if (
    applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_PERSONAL_WEDDING
    ) {

    specificDocList.push(DOCS_LIST.DOC_APP_FOR_PERSONAL_WEDDING_MEDICAL);

  specificDocList.push(DOCS_LIST.DOC_PERSONAL_MEDICAL_HOSPITAL_LETTER);
}

if (
  applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_SCHOOL_UNI_FEES
  ) {
  specificDocList.push(DOCS_LIST.DOC_APP_FOR_FEES);

specificDocList.push(DOCS_LIST.DOC_FEE_BILL);
}

if (
  applicationDetails.PURPOSE ===
  DEFAULT_SETTINGS.PURPOSE.TAG_PROPERTY_PURCHASE
  ) {
  specificDocList.push(DOCS_LIST.DOC_APP_FOR_PROP);

specificDocList.push(DOCS_LIST.DOC_COPY_SALE_DEED);

specificDocList.push(DOCS_LIST.DOC_PROPERTY_PICTURES);

specificDocList.push(DOCS_LIST.DOC_PROPERTY_PREVIOUS_OWNER);

}

if (
  applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_CAR_MOTORCYCLE
  ) {
  specificDocList.push(DOCS_LIST.DOC_APP_FOR_CAR_MOTORCYCLE);
specificDocList.push(DOCS_LIST.DOC_QUOTE_FOR_CAR_MOTORCYCLE);
}

if (
  applicationDetails.PURPOSE ===
  DEFAULT_SETTINGS.PURPOSE.TAG_JAMAAT_WAJEBAAT_FMB_DUES
  ) {
  specificDocList.push(DOCS_LIST.DOC_APP_JAMAAT_DUES);

specificDocList.push(DOCS_LIST.DOC_JAMAAT_DUES_SLIP);
}

if (
  applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_HOME_RENOVATION
  ) {
  specificDocList.push(DOCS_LIST.DOC_APP_FOR_HOME_RENOVATION);
}

  // complete checklist
  specificDocList.push(DOCS_LIST.DOC_COMPLETE_LIST);

  return specificDocList;
}
