import { DEFAULT_SETTINGS } from './defaultSettings'

export default function docsListForApplicationSpecific(applicationDetails) {

  let specificDocList = [];

  // business expansion plan
  if (applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_EXISTING_BUSINESS) {
    specificDocList.push({
      docName: "Business Expansion Plan",
      docTemplate: null
    })
  }

  // new business plan
  if (applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_NEW_BUSINESS) {
    specificDocList.push({
      docName: "New Business Plan",
      docTemplate: null
    })
  }

  // application for qardan hasana for ziarat
  if (applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_ZIARAT) {
    specificDocList.push({
      docName: "Application for Qardan Hasana for Ziarat",
      docTemplate: null
    })
    specificDocList.push({
      docName: "Copy of Ziarat Payment Challan / Quotation",
      docTemplate: null
    })
  }

  if (applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_SCHOOL_UNI_FEES) {
    specificDocList.push({
      docName: "Application for Qardan Hasana for School / University Fees",
      docTemplate: null
    })
    specificDocList.push({
      docName: "Fee Bill",
      docTemplate: null
    })
  }

  if (applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_PROPERTY_PURCHASE) {
    specificDocList.push({
      docName: "Application for Qardan Hasana for Property Purchase",
      docTemplate: null
    })
    specificDocList.push({
      docName: "Copy of Sale Deed for the property",
      docTemplate: null
    })
    specificDocList.push({
      docName: "Pictures of the property",
      docTemplate: null
    })
  }


  if (applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_CAR_MOTORCYCLE) {
    specificDocList.push({
      docName: "Application for Qardan Hasana for Car/Motorcycle",
      docTemplate: null
    })
    specificDocList.push({
      docName: "Quotation for car/motorcycle",
      docTemplate: null
    })
  }

  if (applicationDetails.PURPOSE === DEFAULT_SETTINGS.PURPOSE.TAG_JAMAAT_WAJEBAAT_FMB_DUES) {
    specificDocList.push({
      docName: "Application for Qardan Hasana Jamaat/Wajebaat/FMB Dues",
      docTemplate: null
    })
    specificDocList.push({
      docName: "Jamaat Dues / FMB / Wajebaat Takhmeen Slip",
      docTemplate: null
    })
  }

  return specificDocList;
}
