import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import docsListForProfile from './helpers/docsListForProfile'
import docsListForApplicationGeneral from './helpers/docsListForApplicationGeneral'
import docsListForApplicationSpecific from './helpers/docsListForApplicationSpecific'

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

class ShowDocsContainer extends Component {

  constructor(props) {
    super(props);
    this.btnClickGoBack = this.btnClickGoBack.bind(this);


    this.state = {
      applicationDetails: this.props.location.state.applicationDetails
    }
  }

  componentDidMount() {}

  componentDidUpdate() {
    console.log("ShowDocsContainer componentDidUpdate");
  }

  btnClickGoBack() {
    browserHistory.push({
      pathname: '/',
      state: {
        applicationDetails: this.props.location.state.applicationDetails
      }
    });
  }

  render() {
    console.log("this.state.applicationDetails", this.state.applicationDetails);

    let profileDocs = docsListForProfile(this.state.applicationDetails);
    console.log("profileDocs", profileDocs);
    let applicationDocsGeneral = docsListForApplicationGeneral(this.state.applicationDetails);
    console.log("applicationDocsGeneral", applicationDocsGeneral);
    let applicationDocsSpecfic = docsListForApplicationSpecific(this.state.applicationDetails);
    console.log("applicationDocsSpecfic", applicationDocsSpecfic);


    let divArrProfileDocList = [];
    for (var i = 0; i < profileDocs.length; i++) {
      const sn = i + 1;
      divArrProfileDocList.push(
        <div key={"divArrProfileDocList" + i}>
          {sn + ". " + profileDocs[i].docName}
        </div>

      )
    }

    let divArrGeneralDocList = [];
    for (var j = 0; j < applicationDocsGeneral.length; j++) {
      const sn = j + 1;
      divArrGeneralDocList.push(
        <div key={"divArrGeneralDocList" + j}>
          {sn + ". " + applicationDocsGeneral[j].docName}
        </div>

      )
    }

    let divArrSpecificDocList = [];
    for (var k = 0; k < applicationDocsSpecfic.length; k++) {
      const sn = k + 1 + j;
      divArrSpecificDocList.push(
        <div key={"divArrSpecificDocList" + k}>
          {sn + ". " + applicationDocsSpecfic[k].docName}
        </div>

      )
    }

    return (
      <div className="container-fluid">
        <button className="btn btn-primary"
                type="button"
                onClick={this.btnClickGoBack}>
          Go Back
        </button>
        <br/>
        <br/>
        <div className='well'>
          <br/>
          <strong>Documents required for your profile (one time only):</strong>
          <br/>
          {divArrProfileDocList}
          <br/>
          <strong>Documents required with your Application:</strong>
          <br/>
          {divArrGeneralDocList}
          {divArrSpecificDocList}
          <br/>
        </div>
        <button className="btn btn-primary"
                type="button"
                onClick={this.btnClickGoBack}>
          Go Back
        </button>
      </div>
    );
  }
}

ShowDocsContainer.propTypes = {
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
})(ShowDocsContainer);
