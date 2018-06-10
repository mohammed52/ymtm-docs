import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
// import { setSelectedOption } from '../actions/selectedOptionsActions';
import RequirementsSentConfirmationModal from './RequirementsSentConfirmationModal'
import styles from '../css/components/CategoryContactStyles.css';
import { MASTER_OPTIONS } from './helpers/MASTER_OPTIONS';
import { validateEmail } from './helpers/validateEmail'
import * as types from '../types';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'

class ContactComponent extends Component {
  constructor(props) {
    super(props);

    this.onCompanyNameChange = this.onCompanyNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onTelephoneChange = this.onTelephoneChange.bind(this);
    this.onYourNameChange = this.onYourNameChange.bind(this);

    this.submitContactForm = this.submitContactForm.bind(this);

    this.getFormGroupCompanyName = this.getFormGroupCompanyName.bind(this);
    this.getFormGroupEmail = this.getFormGroupEmail.bind(this);
    this.getFormGroupYourName = this.getFormGroupYourName.bind(this);
    this.getFormGroupTelephone = this.getFormGroupTelephone.bind(this);

    this.verifyCompanyName = this.verifyCompanyName.bind(this);
    this.verifyEmail = this.verifyEmail.bind(this);
    this.verifyTelephone = this.verifyTelephone.bind(this);
    this.verifyYourName = this.verifyYourName.bind(this);
    this.formInputValid = this.formInputValid.bind(this);
    this.onModalExit = this.onModalExit.bind(this);


    this.closeConfirmationModal = this.closeConfirmationModal.bind(this);


    this.state = {
      yourName: "Muhammad Abbas",
      companyName: "MEK",
      email: "info@mek.com.pk",
      telephone: "021-34530931",

      enableValidation: false,

      companyNameStatus: {
        isValid: false
      },
      emailStatus: {
        isValid: false
      },
      telephoneStatus: {
        isValid: false
      },
      yourNameStatus: {
        isValid: false
      },

      showConfirmationModal: false,
      reset: false
    }
  }

  onModalExit() {
    console.log("onModalExit");
  }

  closeConfirmationModal() {
    console.log("closeConfirmationModal");
    this.setState({
      showConfirmationModal: false
    })
    // browserHistory.push('testemail');
    this.setState({
      reset: true
    })
    this.props.resetStore()
    // window.location.reload();
    // window.scrollTo(0, 0)
    this.props.resetComponents();

  }

  componentDidMount() {
    console.log("ContactComponent componentDidMount");
  }

  verifyCompanyName() {
    if (this.state.companyName == "") {
      this.setState({
        companyNameStatus: {
          isValid: false,
          message: "Company name is Required"
        }
      })
    } else {
      this.setState({
        companyNameStatus: {
          isValid: true
        }
      })
    }
  }

  verifyYourName() {
    if (this.state.yourName == "") {
      this.setState({
        yourNameStatus: {
          isValid: false,
          message: "Your Name is Required"
        }
      })
    } else {
      this.setState({
        yourNameStatus: {
          isValid: true
        }
      })
    }
  }

  verifyTelephone() {
    if (this.state.telephone == "") {
      this.setState({
        telephoneStatus: {
          isValid: false,
          message: "Telephone is Required"
        }
      })
    } else {
      this.setState({
        telephoneStatus: {
          isValid: true
        }
      })
    }
  }

  verifyEmail() {
    if (this.state.email == "") {
      this.setState({
        emailStatus: {
          isValid: false,
          message: "Email is Required"
        }
      })
    } else if (!validateEmail(this.state.email)) {
      this.setState({
        emailStatus: {
          isValid: false,
          message: "Email is Not Valid"
        }
      })
    } else {
      this.setState({
        emailStatus: {
          isValid: true
        }
      })
    }
  }

  submitContactForm() {

    this.refs.input.blur()

    this.setState({
      enableValidation: true
    }, () => {
      this.verifyCompanyName();
      this.verifyEmail();
      this.verifyTelephone();
      this.verifyYourName();

      if (this.formInputValid()) {
        this.props.saveContactInfo(this.state.yourName, this.state.companyName, this.state.email, this.state.telephone)

        // console.log("send email");
        // emailService().sendTestEmail().then(res => {
        //   console.log("MAP response");
        //   console.log("res", res);

        // }).catch(() => {
        //   console.log("MAP error");
        // })


      }
    })
  }

  formInputValid() {
    if (this.state.companyNameStatus.isValid &&
      this.state.emailStatus.isValid &&
      this.state.telephoneStatus.isValid &&
      this.state.yourNameStatus.isValid) {
      return true
    }
    return false

  }



  onCompanyNameChange(event) {

    this.setState({
      companyName: event.target.value
    }, () => {
      this.verifyCompanyName()
    })



  }
  onYourNameChange(event) {

    this.setState({
      yourName: event.target.value
    }, () => {
      this.verifyYourName()
    })



  }

  onEmailChange(event) {

    this.setState({
      email: event.target.value
    }, () => {
      this.verifyEmail()
    })

  }
  onTelephoneChange(event) {
    this.setState({
      telephone: event.target.value
    }, () => {
      this.verifyTelephone()
    })

  }

  getFormGroupCompanyName() {
    if ((this.state.companyNameStatus.isValid && this.state.enableValidation) || !this.state.enableValidation) {

      return (
        <div className="form-group">
          <label className="control-label" htmlFor="idCompanyName">
            Company Name
          </label>
          <input className="form-control"
                 id="idCompanyName"
                 type="text"
                 defaultValue={this.state.companyName}
                 onChange={this.onCompanyNameChange} />
        </div>
      )
    }

    return (
      <div className="form-group has-error has-feedback">
        <label className="control-label" htmlFor="idCompanyName">
          Company Name
        </label>
        <input type="text"
               className="form-control"
               id="idCompanyName"
               defaultValue={this.state.companyName}
               onChange={this.onCompanyNameChange} />
        <span className="glyphicon glyphicon-remove form-control-feedback"></span>
        <div className={["form-control-feedback", styles.errorMessage].join(' ')}>
          {this.state.companyNameStatus.message}
        </div>
      </div>
    )

  }
  getFormGroupYourName() {
    if ((this.state.yourNameStatus.isValid && this.state.enableValidation) || !this.state.enableValidation) {

      return (
        <div className="form-group">
          <label className="control-label" htmlFor="idYourName">
            Your Name
          </label>
          <input className="form-control"
                 id="idYourName"
                 type="text"
                 defaultValue={this.state.yourName}
                 onChange={this.onYourNameChange} />
        </div>
      )
    }

    return (
      <div className="form-group has-error has-feedback">
        <label className="control-label" htmlFor="idYourName">
          Your Name
        </label>
        <input type="text"
               className="form-control"
               id="idYourName"
               defaultValue={this.state.yourName}
               onChange={this.onYourNameChange} />
        <span className="glyphicon glyphicon-remove form-control-feedback"></span>
        <div className={["form-control-feedback", styles.errorMessage].join(' ')}>
          {this.state.yourNameStatus.message}
        </div>
      </div>
    )

  }
  getFormGroupTelephone() {
    if ((this.state.telephoneStatus.isValid && this.state.enableValidation) || !this.state.enableValidation) {

      return (
        <div className="form-group">
          <label className="control-label" htmlFor="idTelephone">
            Telephone
          </label>
          <input className="form-control"
                 id="idTelephone"
                 type="text"
                 defaultValue={this.state.telephone}
                 onChange={this.onTelephoneChange} />
        </div>
      )
    }

    return (
      <div className="form-group has-error has-feedback">
        <label className="control-label" htmlFor="idTelephone">
          Telephone
        </label>
        <input type="text"
               className="form-control"
               id="idTelephone"
               defaultValue={this.state.telephone}
               onChange={this.onTelephoneChange} />
        <span className="glyphicon glyphicon-remove form-control-feedback"></span>
        <div className={["form-control-feedback", styles.errorMessage].join(' ')}>
          {this.state.telephoneStatus.message}
        </div>
      </div>
    )

  }

  getFormGroupEmail() {
    if ((this.state.emailStatus.isValid && this.state.enableValidation) || !this.state.enableValidation) {
      return (
        <div className="form-group">
          <label className="control-label" htmlFor="idEmail">
            Email
          </label>
          <input className="form-control"
                 id="idEmail"
                 type="text"
                 defaultValue={this.state.email}
                 onChange={this.onEmailChange} />
        </div>
      )
    }

    return (
      <div className="form-group has-error has-feedback">
        <label className="control-label" htmlFor="idCompanyName">
          Email
        </label>
        <input type="text"
               className="form-control"
               id="idEmail"
               defaultValue={this.state.email}
               onChange={this.onEmailChange} />
        <span className="glyphicon glyphicon-remove form-control-feedback"></span>
        <div className={["form-control-feedback", styles.errorMessage].join(' ')}>
          {this.state.emailStatus.message}
        </div>
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps.selectedOptions.requirementsEmailSentStatus", nextProps.selectedOptions.requirementsEmailSentStatus);
    if (nextProps.selectedOptions.requirementsEmailSentStatus.status == types.REQ_EMAIL_STATUS_SENT) {
      this.setState({
        showConfirmationModal: true
      })
    }
  }

  componentWillUpdate(prevProps, prevState) {
    console.log("ContactComponent componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("ContactComponent componendDidUpdate");
    if (this.state.reset) {
      this.setState({
        reset: false
      })
      window.scrollTo(0, 0)
    }

  }

  render() {

    const formGroupCompanyName = this.getFormGroupCompanyName();
    const formGroupYourName = this.getFormGroupYourName();
    const formGroupTelephone = this.getFormGroupTelephone();
    const formGroupEmail = this.getFormGroupEmail();

    return (
      <div className={[styles.wrapperContactComponent].join(' ')}>
        <div className={[styles.categoryHeader].join(' ')}>
          {this.props.category.categoryHeader}
        </div>
        <div className={[styles.wrapperContactForm].join(' ')}>
          <form role="form" data-toggle="validator" className={[styles.contactForm].join(' ')}>
            {formGroupYourName}
            {formGroupCompanyName}
            {formGroupEmail}
            {formGroupTelephone}
            <button type="button"
                    className="btn btn-primary"
                    onClick={this.submitContactForm}
                    ref="input">
              Submit
            </button>
          </form>
        </div>
        <RequirementsSentConfirmationModal onHide={this.closeConfirmationModal} show={this.state.showConfirmationModal} onExit={this.onModalExit} />
      </div>

      );
  }
}

ContactComponent.propTypes = {
  // index: PropTypes.number.isRequired,
  // category: PropTypes.object.isRequired,


  // selectedOptions: PropTypes.object,
  // topics: PropTypes.array.isRequired,
  // typing: PropTypes.func.isRequired,
  // createTopic: PropTypes.func.isRequired,
  // destroyTopic: PropTypes.func.isRequired,
  // incrementCount: PropTypes.func.isRequired,
  saveContactInfo: PropTypes.func.isRequired,
  resetStore: PropTypes.func.isRequired,
  resetComponents: PropTypes.func.isRequired,
// newTopic: PropTypes.string
};

function mapStateToProps(state) {
  return {
    selectedOptions: state.selectedOptions
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, {
  // setSelectedOption,
})(ContactComponent);
