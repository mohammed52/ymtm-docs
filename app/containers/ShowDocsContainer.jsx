import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

import docsListForProfile from "./helpers/docsListForProfile";
import docsListForApplicationGeneral from "./helpers/docsListForApplicationGeneral";
import docsListForApplicationSpecific from "./helpers/docsListForApplicationSpecific";
import { setSelectedOptions } from "../actions/selectedOptionsActions";
import { DEFAULT_SETTINGS } from "./helpers/defaultSettings";
import SendEmailModal from "./SendEmailModal";
import EmailConfirmationModal from "./EmailConfirmationModal";
import { validateEmail } from "./helpers/validateEmail";
import { emailService } from "../services";

import styles from "../css/components/showDocsStyles";

var ReactBootstrap = require("react-bootstrap");
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var FormGroup = ReactBootstrap.FormGroup;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl;
var Radio = ReactBootstrap.Radio;
var Table = ReactBootstrap.Table;
var FieldGroup = ReactBootstrap.FieldGroup;
var Input = ReactBootstrap.Input;

class ShowDocsContainer extends Component {
  constructor(props) {
    super(props);
    this.btnClickGoBack = this.btnClickGoBack.bind(this);
    this.closeSendEmailModal = this.closeSendEmailModal.bind(this);
    this.closeEmailConfirmationModal = this.closeEmailConfirmationModal.bind(
      this
    );
    this.sendEmail = this.sendEmail.bind(this);
    this.btnClickSendList = this.btnClickSendList.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);

    this.state = {
      applicationDetails: this.props.selectedOptions,
      showSendEmailModal: false,
      showEmailConfirmationModal: false,
      email: "",
      emailIsDiabled: true,
    };
  }

  componentDidMount() {}

  componentDidUpdate() {
    console.log("ShowDocsContainer componentDidUpdate");
  }

  btnClickGoBack() {
    browserHistory.push({
      pathname: "/",
    });
  }

  closeSendEmailModal() {
    this.setState({
      showSendEmailModal: false,
    });
  }

  closeEmailConfirmationModal() {
    this.setState({
      showEmailConfirmationModal: false,
    });
  }

  sendEmail() {
    console.log("sendEmail");
    const data = {
      email: this.state.email,
      selectedOptions: this.props.selectedOptions,
    };

    emailService()
      .sendEmailWithDocs({
        data,
      })
      .then((res) => {
        console.log("MAP response");
        console.log("res.status", res.status);
        console.log("res.data", res.data);
      })
      .catch((e) => {
        console.log(e);
      });

    this.setState({
      showSendEmailModal: false,
      showEmailConfirmationModal: true,
    });
  }

  btnClickSendList() {
    this.setState({
      showSendEmailModal: true,
    });
  }

  onEmailChange(event) {
    console.log("onEmailChange");
    const buttonIsDisbled = !validateEmail(event.target.value);
    this.setState({
      email: event.target.value,
      emailIsDiabled: buttonIsDisbled,
    });
  }

  render() {
    console.log("this.props.selectedOptions", this.props.selectedOptions);

    let profileDocs = docsListForProfile(this.props.selectedOptions);
    console.log("profileDocs", profileDocs);
    let applicationDocsGeneral = docsListForApplicationGeneral(
      this.props.selectedOptions
    );
    console.log("applicationDocsGeneral", applicationDocsGeneral);
    let applicationDocsSpecfic = docsListForApplicationSpecific(
      this.props.selectedOptions
    );
    console.log("applicationDocsSpecfic", applicationDocsSpecfic);

    let divArrProfileDocList = [];
    for (var i = 0; i < profileDocs.length; i++) {
      const sn = i + 1;
      divArrProfileDocList.push(
        <div
          className={[styles.docsItem].join(" ")}
          key={"divArrProfileDocList" + i}
        >
          {sn + ". " + profileDocs[i].docName + " "}
        </div>
      );
    }

    let divArrGeneralDocList = [];
    for (var j = 0; j < applicationDocsGeneral.length; j++) {
      const sn = j + 1;
      divArrGeneralDocList.push(
        <div
          className={[styles.docsItem].join(" ")}
          key={"divArrGeneralDocList" + j}
        >
          {sn + ". " + applicationDocsGeneral[j].docName + " "}
          {applicationDocsGeneral[j].docTemplate !== null ? (
            <strong>
              <a href={"/docs/" + applicationDocsGeneral[j].docTemplate}>
                (download template)
              </a>
            </strong>
          ) : (
            ""
          )}
        </div>
      );
    }

    let divArrSpecificDocList = [];
    for (var k = 0; k < applicationDocsSpecfic.length; k++) {
      const sn = k + 1 + j;
      divArrSpecificDocList.push(
        <div
          className={[styles.docsItem].join(" ")}
          key={"divArrSpecificDocList" + k}
        >
          {sn + ". " + applicationDocsSpecfic[k].docName + " "}
          {applicationDocsSpecfic[k].docTemplate !== null ? (
            <strong>
              <a href={"/docs/" + applicationDocsSpecfic[k].docTemplate}>
                (download template)
              </a>
            </strong>
          ) : (
            ""
          )}
        </div>
      );
    }

    return (
      <div className="container-fluid">
        <div className={[styles.docsListWrapper, "well"].join(" ")}>
          {this.props.selectedOptions.REPEAT_APPLY ===
          DEFAULT_SETTINGS.REPEAT_APPLY.TAG_FIRST_TIME_APPLY ? (
            <div>
              <strong className={[styles.docsItem].join(" ")}>
                Documents required for your online profile (one time only):
              </strong>
              <br />
              {divArrProfileDocList}
              <br />
            </div>
          ) : (
            ""
          )}
          <strong className={[styles.docsItem].join(" ")}>
            Documents required to be submitted with your Application:
          </strong>
          <br />
          {divArrGeneralDocList}
          {divArrSpecificDocList}
        </div>
        <strong className={[styles.docsItem].join(" ")}>
        Send above documents to Hussain Bhai Ghani +92-331-3917730 in Tawfeer
          Office or email to: ymtm@yousufimohallah.com
        </strong>
        <br />
        <br />
{/*        <button
          className="btn btn-primary"
          type="button"
          onClick={this.btnClickSendList}
        >
          Send This List to my Email
        </button>
      <br />*/}
        <button
          className="btn btn-default"
          type="button"
          onClick={this.btnClickGoBack}
        >
          Go Back
        </button>
        <br />
        <br />
        <SendEmailModal
          show={this.state.showSendEmailModal}
          onHide={this.closeSendEmailModal}
          sendEmail={this.sendEmail}
          onEmailChange={this.onEmailChange}
          emailIsDiabled={this.state.emailIsDiabled}
        />
        <EmailConfirmationModal
          show={this.state.showEmailConfirmationModal}
          onHide={this.closeEmailConfirmationModal}
        />
      </div>
    );
  }
}

ShowDocsContainer.propTypes = {
  selectedOptions: PropTypes.object.isRequired,
  // topics: PropTypes.array.isRequired,
  // typing: PropTypes.func.isRequired,
  // createTopic: PropTypes.func.isRequired,
  // destroyTopic: PropTypes.func.isRequired,
  // incrementCount: PropTypes.func.isRequired,
  // decrementCount: PropTypes.func.isRequired,
  // newTopic: PropTypes.string
};

function mapStateToProps(state) {
  return {
    selectedOptions: state.selectedOptions,
    // topics: state.topic.topics,
    // newTopic: state.topic.newTopic
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(
  mapStateToProps,
  {
    // createTopic,
    // typing,
    // incrementCount,
    // decrementCount,
    // destroyTopic
  }
)(ShowDocsContainer);
