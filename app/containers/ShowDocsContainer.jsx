import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
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
    this.state = {
      applicationDetails: this.props.location.state.applicationDetails
    }
  }

  componentDidMount() {}

  componentDidUpdate() {
    console.log("ShowDocsContainer componentDidUpdate");
  }

  render() {
    console.log("this.state.applicationDetails", this.state.applicationDetails);

    let profileDocs = docsListForProfile(this.state.applicationDetails);
    console.log("profileDocs", profileDocs);
    let applicationDocsGeneral = docsListForApplicationGeneral(this.state.applicationDetails);
    console.log("applicationDocsGeneral", applicationDocsGeneral);
    let applicationDocsSpecfic = docsListForApplicationSpecific(this.state.applicationDetails);
    console.log("applicationDocsSpecfic", applicationDocsSpecfic);
    return (
      <div>
        Show Docs
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
