import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classNames from "classnames/bind";
import { browserHistory } from "react-router";
import styles from "../css/components/homeStyles";
import ymtm from "../images/ymtm.png";
import { DEFAULT_SETTINGS } from "./helpers/defaultSettings";
import { setAmount, setSourceOfIncome, setPurpose, setRepeatApply } from "../actions/selectedOptionsActions";
// import OptionsFormComponent from '../components/OptionsFormComponent'

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
var Checkbox = ReactBootstrap.Checkbox;

class Home extends Component {
  constructor(props) {
    super(props);
    this.handlePurposeOptionChange = this.handlePurposeOptionChange.bind(this);
    this.handleincomeSourceOptionChange = this.handleincomeSourceOptionChange.bind(
      this
      );
    this.handlerepeatApplyOptionsChange = this.handlerepeatApplyOptionsChange.bind(
      this
      );
    this.btnClickGetDocList = this.btnClickGetDocList.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    // console.log("this.props.location.state.applicationDetails", this.props.location.state.applicationDetails);

  // this.state = {
  //   PURPOSE: DEFAULT_SETTINGS.PURPOSE.TAG_EXISTING_BUSINESS,
  //   SOURCE_OF_INCOME: DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_BUSINESS_SOLE_PROP,
  //   AMOUNT: DEFAULT_SETTINGS.AMOUNT,
  //   REPEAT_APPLY: DEFAULT_SETTINGS.REPEAT_APPLY.TAG_FIRST_TIME_APPLY
  // }
}

componentDidMount() {
  console.log("HomeContainer componentDidMount");
}

componentDidUpdate() {
  console.log("HomeContainer componentDidUpdate");
}

handlePurposeOptionChange(changeEvent) {
  const {setPurpose} = this.props;
  setPurpose(changeEvent.target.value);
  // this.setState({
  //   PURPOSE: changeEvent.target.value
  // });
}

handleincomeSourceOptionChange(changeEvent) {
  const {setSourceOfIncome} = this.props;
  setSourceOfIncome(changeEvent.target.value);

  // this.setState({
  //   SOURCE_OF_INCOME: changeEvent.target.value
  // })
}
handlerepeatApplyOptionsChange(changeEvent) {
  const {setRepeatApply} = this.props;
  setRepeatApply(changeEvent.target.value);

  // this.setState({
  //   REPEAT_APPLY: changeEvent.target.value
  // })
}

btnClickGetDocList() {
    // console.log("btnClickGetDocList");
    // const applicationDetails = {
    //   PURPOSE: this.state.PURPOSE,
    //   AMOUNT: this.state.AMOUNT,
    //   SOURCE_OF_INCOME: this.state.SOURCE_OF_INCOME,
    //   REPEAT_APPLY: this.state.REPEAT_APPLY
    // }
    // console.log("applicationDetails", applicationDetails);
    browserHistory.push({
      pathname: "/showdocs"
    });
  }

  onAmountChange(event) {
    const {setAmount} = this.props;
    setAmount(event.target.value);
  }

  render() {
    return (
      <div className={[styles.homeWrapper].join(" ")}>
      <h3 className={[styles.titleText].join(" ")}>Get the List of Documents required for your Qardan Hasana Application:</h3>
      <form action="">
      <div className={[styles.optionsWrapper].join(" ")}>
      <div className={[styles.optionCategory, "well"].join(" ")}>
      <FormGroup>
      <ControlLabel>
      STEP-1: Select Qardan Hasana Purpose
      </ControlLabel>
      <br />
      <Radio inline
      name="PURPOSEOption"
      onChange={this.handlePurposeOptionChange}
      value={DEFAULT_SETTINGS.PURPOSE.TAG_EXISTING_BUSINESS}
      checked={this.props.selectedOptions.PURPOSE ===
        DEFAULT_SETTINGS.PURPOSE.TAG_EXISTING_BUSINESS}>
        For Existing Business
        </Radio>
        <br />
        <Radio inline
        name="PURPOSEOption"
        onChange={this.handlePurposeOptionChange}
        value={DEFAULT_SETTINGS.PURPOSE.TAG_NEW_BUSINESS}
        checked={this.props.selectedOptions.PURPOSE ===
          DEFAULT_SETTINGS.PURPOSE.TAG_NEW_BUSINESS}>
          For New Business
          </Radio>
          <br />
          <Radio inline
          name="PURPOSEOption"
          onChange={this.handlePurposeOptionChange}
          value={DEFAULT_SETTINGS.PURPOSE.TAG_ZIARAT}
          checked={this.props.selectedOptions.PURPOSE ===
            DEFAULT_SETTINGS.PURPOSE.TAG_ZIARAT}>
            Ziarat
            </Radio>
            <br />
            <Radio inline
            name="PURPOSEOption"
            onChange={this.handlePurposeOptionChange}
            value={DEFAULT_SETTINGS.PURPOSE.TAG_TRAVEL}
            checked={this.props.selectedOptions.PURPOSE ===
              DEFAULT_SETTINGS.PURPOSE.TAG_TRAVEL}>
              Travel
              </Radio>
              <br />
              <Radio inline
              name="PURPOSEOption"
              onChange={this.handlePurposeOptionChange}
              value={DEFAULT_SETTINGS.PURPOSE.TAG_SCHOOL_UNI_FEES}
              checked={this.props.selectedOptions.PURPOSE ===
                DEFAULT_SETTINGS.PURPOSE.TAG_SCHOOL_UNI_FEES}>
                Fees (School/University)
                </Radio>
                <br />
                <Radio inline
                name="PURPOSEOption"
                onChange={this.handlePurposeOptionChange}
                value={DEFAULT_SETTINGS.PURPOSE.TAG_PROPERTY_PURCHASE}
                checked={this.props.selectedOptions.PURPOSE ===
                  DEFAULT_SETTINGS.PURPOSE.TAG_PROPERTY_PURCHASE}>
                  Property Purchase
                  </Radio>
                  <br />
                  <Radio inline
                  name="PURPOSEOption"
                  onChange={this.handlePurposeOptionChange}
                  value={DEFAULT_SETTINGS.PURPOSE.TAG_CAR_MOTORCYCLE}
                  checked={this.props.selectedOptions.PURPOSE ===
                    DEFAULT_SETTINGS.PURPOSE.TAG_CAR_MOTORCYCLE}>
                    Car / Motorcycle
                    </Radio>
                    <br />
                    <Radio inline
                    name="PURPOSEOption"
                    onChange={this.handlePurposeOptionChange}
                    value={DEFAULT_SETTINGS.PURPOSE.TAG_JAMAAT_WAJEBAAT_FMB_DUES}
                    checked={this.props.selectedOptions.PURPOSE ===
                      DEFAULT_SETTINGS.PURPOSE.TAG_JAMAAT_WAJEBAAT_FMB_DUES}>
                      Jamaat Dues / Wajebaat / Fmb
                      </Radio>
                      <br />
                      <Radio inline
                      name="PURPOSEOption"
                      onChange={this.handlePurposeOptionChange}
                      value={DEFAULT_SETTINGS.PURPOSE.TAG_HOME_RENOVATION}
                      checked={this.props.selectedOptions.PURPOSE ===
                        DEFAULT_SETTINGS.PURPOSE.TAG_HOME_RENOVATION}>
                        Home Renovation
                        </Radio>
                        <br />
                        <Radio inline
                        name="PURPOSEOption"
                        onChange={this.handlePurposeOptionChange}
                        value={DEFAULT_SETTINGS.PURPOSE.TAG_PERSONAL_WEDDING}
                        checked={this.props.selectedOptions.PURPOSE ===
                          DEFAULT_SETTINGS.PURPOSE.TAG_PERSONAL_WEDDING}>
                          Personal Use / Wedding / Medical / Education etc.
                          </Radio>
                          </FormGroup>
                          </div>
                          <div className={[styles.optionCategory, "well"].join(" ")}>
                          <FormGroup>
                          <ControlLabel>
                          STEP-2: Enter Amount
                          </ControlLabel>
                          <FormControl type="text"
                          defaultValue={this.props.selectedOptions.AMOUNT}
                          id="id-AMOUNT"
                          onChange={this.onAmountChange} />
                          </FormGroup>
                          <FormGroup>
                          <ControlLabel>
                          STEP-3: Have you taken Qardan Hasana Before?
                          </ControlLabel>
                          <br />
                          <Radio inline
                          name="repeatApplyOptions"
                          onChange={this.handlerepeatApplyOptionsChange}
                          value={DEFAULT_SETTINGS.REPEAT_APPLY.TAG_REPEAT_APPLY}
                          checked={this.props.selectedOptions.REPEAT_APPLY ===
                            DEFAULT_SETTINGS.REPEAT_APPLY.TAG_REPEAT_APPLY}>
                            I have taken Qardan Hasana before
                            </Radio>
                            <br />
                            <Radio inline
                            name="repeatApplyOptions"
                            onChange={this.handlerepeatApplyOptionsChange}
                            value={DEFAULT_SETTINGS.REPEAT_APPLY.TAG_FIRST_TIME_APPLY}
                            checked={this.props.selectedOptions.REPEAT_APPLY ===
                              DEFAULT_SETTINGS.REPEAT_APPLY.TAG_FIRST_TIME_APPLY}>
                              This is the first time I am applying for Qardan Hasana
                              </Radio>
                              </FormGroup>
                              </div>
                              <div className={[styles.optionCategory, "well"].join(" ")}>
                              <FormGroup>
                              <ControlLabel>
                              STEP-4: Your Source of Income
                              </ControlLabel>
                              <br />
                              <Radio inline
                              name="incomeSourceOption"
                              onChange={this.handleincomeSourceOptionChange}
                              value={DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_BUSINESS_SOLE_PROP}
                              checked={this.props.selectedOptions.SOURCE_OF_INCOME ===
                                DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_BUSINESS_SOLE_PROP}>
                                Business (Sole Proprietor)
                                </Radio>
                                <br />
                                <Radio inline
                                name="incomeSourceOption"
                                onChange={this.handleincomeSourceOptionChange}
                                value={DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_BUSINESS_PARTNERSHIP}
                                checked={this.props.selectedOptions.SOURCE_OF_INCOME ===
                                  DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_BUSINESS_PARTNERSHIP}>
                                  Business (Partnership)
                                  </Radio>
                                  <br />
                                  <Radio inline
                                  name="incomeSourceOption"
                                  onChange={this.handleincomeSourceOptionChange}
                                  value={DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_JOB}
                                  checked={this.props.selectedOptions.SOURCE_OF_INCOME ===
                                    DEFAULT_SETTINGS.SOURCE_OF_INCOME.TAG_JOB}>
                                    Job
                                    </Radio>
                                    <br />
                                    <Radio inline
                                    name="incomeSourceOption"
                                    onChange={this.handleincomeSourceOptionChange}
                                    value={DEFAULT_SETTINGS.SOURCE_OF_INCOME
                                      .TAG_HOME_BASED_INCOME_TUITION}
                                      checked={this.props.selectedOptions.SOURCE_OF_INCOME ===
                                        DEFAULT_SETTINGS.SOURCE_OF_INCOME
                                        .TAG_HOME_BASED_INCOME_TUITION}>
                                        Home based income (tuition/therapy etc.)
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
                                        <br />
                                        <br />
                                        </div>
                                        );
}
}

Home.propTypes = {
  selectedOptions: PropTypes.object.isRequired
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
    selectedOptions: state.selectedOptions
  // newTopic: state.topic.newTopic
};
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(
  mapStateToProps,
  {
    setPurpose,
    setSourceOfIncome,
    setAmount,
    setRepeatApply
  }
  )(Home);
