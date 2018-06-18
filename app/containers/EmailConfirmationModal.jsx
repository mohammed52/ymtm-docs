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

class EmailConfirmationModal extends Component {
  render() {
    return (
      <Modal show={this.props.show}
             onHide={this.props.onHide}>
        <Modal.Body>
          <div>
            The list has been sent to your email!
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary"
                  onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

EmailConfirmationModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};


export default EmailConfirmationModal
