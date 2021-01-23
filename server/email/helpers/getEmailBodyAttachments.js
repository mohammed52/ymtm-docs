import path from "path";

import docsListForProfile from "../../../app/containers/helpers/docsListForProfile";
import docsListForApplicationGeneral from "../../../app/containers/helpers/docsListForApplicationGeneral";
import docsListForApplicationSpecific from "../../../app/containers/helpers/docsListForApplicationSpecific";
import { DEFAULT_SETTINGS } from "../../../app/containers/helpers/defaultSettings";

export default function getEmailBodyAttachments(emailAddress, selectedOptions) {
  let profileDocs = docsListForProfile(selectedOptions);
  console.log("profileDocs", profileDocs);
  let applicationDocsGeneral = docsListForApplicationGeneral(selectedOptions);
  console.log("applicationDocsGeneral", applicationDocsGeneral);
  let applicationDocsSpecfic = docsListForApplicationSpecific(selectedOptions);
  console.log("applicationDocsSpecfic", applicationDocsSpecfic);

  let htmlReturnString = "";
  let attachementsArray = [];
  console.log("selectedOptions.REPEAT_APPLY", selectedOptions.REPEAT_APPLY);

  console.log("DEFAULT_SETTINGS", DEFAULT_SETTINGS);
  htmlReturnString += "<div>";

  if (
    selectedOptions.REPEAT_APPLY ===
    DEFAULT_SETTINGS.REPEAT_APPLY.TAG_FIRST_TIME_APPLY
  ) {
    htmlReturnString += "<div>";
    htmlReturnString += "<br/>";
    htmlReturnString +=
      "<strong>Documents required for your online profile(one time only):</strong>";

    for (var k = 0; k < profileDocs.length; k++) {
      htmlReturnString += "<div>";
      htmlReturnString += k + 1 + ". " + profileDocs[k].docName;
      htmlReturnString += "</div>";
    }

    htmlReturnString += "</div>";
  } else {
    // htmlReturnString += "<div>Is Repeat Apply</div>"
  }
  htmlReturnString += "<br/>";
  htmlReturnString +=
    "<strong>Documents required to be submitted with your Application:</strong>";
  let countAppDoc = 1;
  for (var i = 0; i < applicationDocsGeneral.length; i++) {
    htmlReturnString += "<div>";
    htmlReturnString += countAppDoc + ". " + applicationDocsGeneral[i].docName;
    if (applicationDocsGeneral[i].docTemplate != null) {
      htmlReturnString += " (template attached)";
      console.log(
        "applicationDocsGeneral[i].docName",
        applicationDocsGeneral[i].docName
      );
      console.log(
        "applicationDocsGeneral[i].docTemplate",
        applicationDocsGeneral[i].docTemplate
      );
      attachementsArray.push({
        filename: applicationDocsGeneral[i].docTemplate,
        path: path.join(
          process.cwd(),
          "server/email/docs/" + applicationDocsGeneral[i].docTemplate
        ),
        encoding: "UTF-8",
      });
    }
    countAppDoc++;
  }

  for (var j = 0; j < applicationDocsSpecfic.length; j++) {
    htmlReturnString += "<div>";
    htmlReturnString += countAppDoc + ". " + applicationDocsSpecfic[j].docName;
    if (applicationDocsSpecfic[j].docTemplate !== null) {
      htmlReturnString += " (template attached)";
      console.log(
        "applicationDocsSpecfic[j].docName",
        applicationDocsSpecfic[j].docName
      );
      console.log(
        "applicationDocsSpecfic[j].docTemplate",
        applicationDocsSpecfic[j].docTemplate
      );
      attachementsArray.push({
        filename: applicationDocsSpecfic[j].docTemplate,
        path: path.join(
          process.cwd(),
          "server/email/docs/" + applicationDocsSpecfic[j].docTemplate
        ),
        encoding: "UTF-8",
      });
    }
    htmlReturnString += "</div>";
    htmlReturnString += "</div>";
    countAppDoc++;
  }
  htmlReturnString += "<br/>";
  htmlReturnString +=
    "<div>Send above documents to Shabbir Bhai Dohad +92-300-2182932 in Tawfeer Office or email to: ymtm@yousufimohallah.com</div>";
  htmlReturnString += "<br/>";
  htmlReturnString +=
    "<strong>For assistance, Contact: Shabbir Bhai Dohad +92-300-2182932</strong>";
  htmlReturnString += "<br/>";
  htmlReturnString += "<br/>";
  htmlReturnString += "<strong>Salaam,</strong>";
  htmlReturnString += "<div>Yousufi Mohalla Tawfeerul Mubarak</div>";
  htmlReturnString += "</div>";

  return {
    emailBody: htmlReturnString,
    attachementsArray,
  };
}
