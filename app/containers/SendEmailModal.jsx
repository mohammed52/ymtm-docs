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
            Settings
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>Select Cities:</strong> select cities
          <FormGroup controlId="formControlsTextarea">
            <Accordion>
              Array Panels
            </Accordion>
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary"
                  onClick={this.props.sendEmail}>
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
  show: PropTypes.func.isRequired,
  sendEmail: PropTypes.func.isRequired,
};


export default SendEmailModal
