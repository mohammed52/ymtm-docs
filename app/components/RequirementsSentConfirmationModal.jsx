import React, { Component } from 'react';
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

class RequirementsSentConfirmationModal extends Component {

  constructor(props) {
    super(props)
  }

  btnSave() {
    console.log("btnSave");
  }

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>
            {"Settings"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>Select Cities:</strong>
          {"citiesArr"}
          <FormGroup controlId="formControlsTextarea">
            <Accordion>
              {"arrPanels"}
            </Accordion>
          </FormGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="primary" onClick={this.btnSave}>
            Save
          </Button>
          <Button onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      );
  }
}

RequirementsSentConfirmationModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};


export default RequirementsSentConfirmationModal
