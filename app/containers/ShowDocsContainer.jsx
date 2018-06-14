import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';

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

  componentDidMount() {
    console.log("ShowDocsContainer componentDidMount");
    console.log("this.state.applicationDetails", this.state.applicationDetails);
  }

  componentDidUpdate() {
    console.log("ShowDocsContainer componentDidUpdate");
  }

  render() {

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
