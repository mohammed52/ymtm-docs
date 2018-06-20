import React, { Component } from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';

var ReactBootstrap = require('react-bootstrap');
// var Accordion = ReactBootstrap.Accordion;
// var Panel = ReactBootstrap.Panel;
var Modal = ReactBootstrap.Modal;
// var OverlayTrigger = ReactBootstrap.OverlayTrigger;
var Button = ReactBootstrap.Button;
// var FieldGroup = ReactBootstrap.FieldGroup;

var Accordion = ReactBootstrap.Accordion;
var Panel = ReactBootstrap.Panel;
var FormGroup = ReactBootstrap.FormGroup;
var ControlLabel = ReactBootstrap.ControlLabel;
var FormControl = ReactBootstrap.FormControl;
var Checkbox = ReactBootstrap.Checkbox

class SendEmailModal extends Component {



  render() {
    return (
      <Modal show={this.props.show}
             onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>
            Send List to Email
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>Enter Your Email:</strong>
          <FormGroup>
            <FormControl type="text"
                         id="id-email"
                         onChange={this.props.onEmailChange}
                         placeholder="youremail@xyz.com"
                         value="mohammed.petiwala52@gmail.com" />
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary"
                  onClick={this.props.sendEmail}
                  disabled={this.props.emailIsDiabled}>
            Send Email
          </Button>
          <Button onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

SendEmailModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  sendEmail: PropTypes.func.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  emailIsDiabled: PropTypes.bool.isRequired
};


export default SendEmailModal
