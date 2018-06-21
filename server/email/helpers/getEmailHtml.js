import docsListForProfile from '../../../app/containers/helpers/docsListForProfile'
import docsListForApplicationGeneral from '../../../app/containers/helpers/docsListForApplicationGeneral'
import docsListForApplicationSpecific from '../../../app/containers/helpers/docsListForApplicationSpecific'
import DEFAULT_SETTINGS from '../../../app/containers/helpers/defaultSettings'


export default function getEmailHtml(emailAddress, selectedOptions) {
  let profileDocs = docsListForProfile(selectedOptions);
  console.log("profileDocs", profileDocs);
  let applicationDocsGeneral = docsListForApplicationGeneral(selectedOptions);
  console.log("applicationDocsGeneral", applicationDocsGeneral);
  let applicationDocsSpecfic = docsListForApplicationSpecific(selectedOptions);
  console.log("applicationDocsSpecfic", applicationDocsSpecfic);

  let htmlReturnString = "";
  if (selectedOptions.REPEAT_APPLY === DEFAULT_SETTINGS.REPEAT_APPLY.TAG_FIRST_TIME_APPLY) {
    htmlReturnString += "<div>Documents required for your profile (one time only):</div>"
  }
  return "<b>THIS IS THE REAL DEAL</b>"
}
