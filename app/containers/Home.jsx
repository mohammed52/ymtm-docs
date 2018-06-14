import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import CategoryWrapperContainer from './CategoryWrapperContainer'
import styles from '../css/components/homeStyles';
import ymtm from '../images/ymtm.png';
import { browserHistory } from 'react-router';
// import { defaultSettings } from './defaultSettings'

var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var FormGroup = ReactBootstrap.FormGroup;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl;
var Radio = ReactBootstrap.Radio;
var Table = ReactBootstrap.Table;
var FieldGroup = ReactBootstrap.FieldGroup;
var Input = ReactBootstrap.Input;

const defaultSettings = {
  purpose: {
    existingBusiness: "existingBusiness",
    newBusiness: "newBusiness",
    ziarat: "ziarat",
    schoolUniversityFees: "schoolUniversityFees",
    propertyPurchase: "propertyPurchase",
    carMotorcycle: "carMotorcycle",
    jamaatDuesWajebaatFmb: "jamaatDuesWajebaatFmb"
  },
  amount: 1000000,
  sourceOfIncome: {
    businessSoleProprietorship: "businessSoleProprietorship",
    businessPartnership: "businessPartnership",
    job: "job",
    homeBasedIncomeTuition: "homeBasedIncomeTuition"
  }
}

class Home extends Component {

  constructor(props) {
    super(props);
    this.handlePurposeOptionChange = this.handlePurposeOptionChange.bind(this);
    this.handleincomeSourceOptionChange = this.handleincomeSourceOptionChange.bind(this);
    this.btnClickGetDocList = this.btnClickGetDocList.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.state = {
      selectedPurpose: defaultSettings.purpose.existingBusiness,
      selectedIncomeSource: defaultSettings.sourceOfIncome.businessSoleProprietorship,
      amount: defaultSettings.amount
    }
  }

  componentDidMount() {
    console.log("HomeContainer componentDidMount");
  }

  componentDidUpdate() {
    console.log("HomeContainer componentDidUpdate");
  }

  handlePurposeOptionChange(changeEvent) {
    this.setState({
      selectedPurpose: changeEvent.target.value
    });
  }

  handleincomeSourceOptionChange(changeEvent) {
    this.setState({
      selectedIncomeSource: changeEvent.target.value
    })
  }

  btnClickGetDocList() {
    console.log("btnClickGetDocList");
    const applicationDetails = {
      purpose: this.state.selectedPurpose,
      amount: this.state.amount,
      incomeSource: this.state.selectedIncomeSource
    }
    console.log("applicationDetails", applicationDetails);
    browserHistory.push({
      pathname: '/showdocs',
      state: {
        applicationDetails
      }
    });
  }

  onAmountChange(event) {
    this.setState({
      amount: event.target.value
    })
  }



  render() {

    return (
      <div className={[styles.homeWrapper].join(' ')}>
        <h3 className={[styles.titleText].join(' ')}>Get the List of Documents required for your Qardan Hasana Application:</h3>
        <form action="">
          <div className={[styles.optionsWrapper].join(' ')}>
            <div className={[styles.optionCategory, "well"].join(' ')}>
              <FormGroup>
                <ControlLabel>
                  Select Purpose
                </ControlLabel>
                <br/>
                <Radio inline
                       name="purposeOption"
                       onChange={this.handlePurposeOptionChange}
                       value={defaultSettings.purpose.existingBusiness}
                       checked={this.state.selectedPurpose === defaultSettings.purpose.existingBusiness}>
                  For Existing Business
                </Radio>
                <br/>
                <Radio inline
                       name="purposeOption"
                       onChange={this.handlePurposeOptionChange}
                       value={defaultSettings.purpose.newBusiness}
                       checked={this.state.selectedPurpose === defaultSettings.purpose.newBusiness}>
                  New Business
                </Radio>
              </FormGroup>
            </div>
            <div className={[styles.optionCategory, "well"].join(' ')}>
              <FormGroup>
                <ControlLabel>
                  Enter Amount
                </ControlLabel>
                <FormControl type="text"
                             defaultValue={this.state.amount}
                             id="id-amount"
                             onChange={this.onAmountChange} />
              </FormGroup>
            </div>
            <div className={[styles.optionCategory, "well"].join(' ')}>
              <FormGroup>
                <ControlLabel>
                  Source of Income
                </ControlLabel>
                <br/>
                <Radio inline
                       name="incomeSourceOption"
                       onChange={this.handleincomeSourceOptionChange}
                       value={defaultSettings.sourceOfIncome.businessSoleProprietorship}
                       checked={this.state.selectedIncomeSource === defaultSettings.sourceOfIncome.businessSoleProprietorship}>
                  Business (Sole Proprietor)
                </Radio>
                <br/>
                <Radio inline
                       name="incomeSourceOption"
                       onChange={this.handleincomeSourceOptionChange}
                       value={defaultSettings.sourceOfIncome.businessPartnership}
                       checked={this.state.selectedIncomeSource === defaultSettings.sourceOfIncome.businessPartnership}>
                  Business (Partnership)
                </Radio>
              </FormGroup>
            </div>
          </div>
          <button className="btn btn-primary"
                  type="button"
                  onClick={this.btnClickGetDocList}>
            Get Documents List!
          </button>
        </form>
      </div>
    );
  }
}

Home.propTypes = {
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
    // topics: state.topic.topics,
    // newTopic: state.topic.newTopic
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, {
  // createTopic,
  // typing,
  // incrementCount,
  // decrementCount,
  // destroyTopic
})(Home);
