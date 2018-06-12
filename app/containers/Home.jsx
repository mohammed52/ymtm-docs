import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import CategoryWrapperContainer from './CategoryWrapperContainer'
import styles from '../css/components/homeStyles';
import ymtm from '../images/ymtm.png';
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
    this.state = {
      selectedPurpose: defaultSettings.purpose.existingBusiness
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



  render() {

    return (
      <div className={[styles.homeWrapper].join(' ')}>
        <div className={["container-fluid"].join(' ')}>
          <div className={[styles.optionsWrapper].join(' ')}>
            <form action="">
              <div className="well">
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
                  <Radio inline
                         name="purposeOption"
                         onChange={this.handlePurposeOptionChange}
                         value={defaultSettings.purpose.newBusiness}
                         checked={this.state.selectedPurpose === defaultSettings.purpose.newBusiness}>
                    New Business
                  </Radio>
                </FormGroup>
              </div>
              <div className="well">
                <FormGroup>
                  <ControlLabel>
                    Enter Amount
                  </ControlLabel>
                  <FormControl type="text"
                               defaultValue={1000000}
                               id="id-amount" />
                </FormGroup>
              </div>
              <div className="well">
                <FormGroup>
                  <ControlLabel>
                    Source of Income
                  </ControlLabel>
                  <Radio inline
                         name="incomeSourceOption"
                         onChange={this.handleincomeSourceOptionChange}
                         value={defaultSettings.sourceOfIncome.businessSoleProprietorship}
                         checked={this.state.selectedIncomeSource === defaultSettings.sourceOfIncome.businessSoleProprietorship}>
                    Business (Sole Proprietor)
                  </Radio>
                  <Radio inline
                         name="incomeSourceOption"
                         onChange={this.handleincomeSourceOptionChange}
                         value={defaultSettings.sourceOfIncome.businessPartnership}
                         checked={this.state.selectedIncomeSource === defaultSettings.sourceOfIncome.businessPartnership}>
                    Business (Partnership)
                  </Radio>
                </FormGroup>
              </div>
            </form>
          </div>
          <h2 className={[styles.pageTitle].join(' ')}>Get INSTANT quotes for Metal Doors!</h2>
          <h3 className={[styles.pageSubTitle].join(' ')}>Select a Door Type</h3>
          <CategoryWrapperContainer />
        </div>
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
