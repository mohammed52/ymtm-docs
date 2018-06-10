import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { setSelectedOption, saveOptionsAndContact, resetStore } from '../actions/selectedOptionsActions';

import ImageCategoryComponent from '../components/ImageCategoryComponent';
import ContactComponent from '../components/ContactComponent';
import { MASTER_OPTIONS } from '../components/helpers/MASTER_OPTIONS';
import { CONTACT_FORM_OPTION } from '../components/helpers/MASTER_OPTIONS';
import allOptionsSelected from './helpers/allOptionsSelected';
import styles from '../css/components/CategoryWrapperStyles';
import * as types from '../types';

class CategoryWrapperContainer extends Component {

  constructor(props) {
    super(props)


    this.saveOptionsAndContact = this.saveOptionsAndContact.bind(this)
    this.resetComponents = this.resetComponents.bind(this)

    this.state = {
      reset: false

    }
  }

  resetComponents() {
    this.setState({
      reset: true
    })
  }

  saveOptionsAndContact(yourName, companyName, email, telephone) {

    this.props.saveOptionsAndContact(yourName, companyName, email, telephone, this.props.selectedOptions)

  }

  componentDidMount() {
    console.log("CategoryWrapperContainer componentDidMount");
  }

  componendDidUpdate() {
console.log("CategoryWrapperContainer componendDidUpdate");
    if (this.state.reset) {
      window.scrollTo(0, 0)
    }

    this.setState({
      reset: false
    })

  }

  render() {
    let categoryComponents = []
    let contactComponent = [];
    if (allOptionsSelected(this.props.selectedOptions)) {
      contactComponent.push(
        <ContactComponent key="ContactComponent"
                          saveContactInfo={this.saveOptionsAndContact}
                          category={CONTACT_FORM_OPTION}
                          resetStore={this.props.resetStore}
                          resetComponents={this.resetComponents} />
      )
    }

    for (var i = 0; i < MASTER_OPTIONS.length; i++) {
      const category = MASTER_OPTIONS[i]
      if (i === 0 || (i > 0 && this.props.selectedOptions[i - 1].isSelected)) {

        switch (category.categoryType) {
          case types.CAT_TYPE_IMAGE_SELECTION: {
            categoryComponents.push(
              <ImageCategoryComponent key={"categoryComponents-ImageCategoryComponent" + i}
                                      category={category}
                                      selected={this.props.selectedOptions[i]}
                                      setSelectedOption={this.props.setSelectedOption}
                                      index={i} />
            );
            break;
          }
          default:
            break;
        }
      }

    }

    return (
      <div className={[styles.categoryWrapper].join(' ')}>
        <ReactCSSTransitionGroup transitionName={styles}
                                 transitionEnterTimeout={5000}
                                 transitionLeaveTimeout={500}
                                 transitionAppearTimeout={5000}
                                 transitionLeave={false}>
          {categoryComponents}
          {contactComponent}
        </ReactCSSTransitionGroup>
      </div>
      );
  }
}

CategoryWrapperContainer.propTypes = {
  selectedOptions: PropTypes.array,
  contactInfo: PropTypes.object,

  // topics: PropTypes.array.isRequired,
  // typing: PropTypes.func.isRequired,
  // createTopic: PropTypes.func.isRequired,
  // destroyTopic: PropTypes.func.isRequired,
  // incrementCount: PropTypes.func.isRequired,
  saveOptionsAndContact: PropTypes.func.isRequired,
  setSelectedOption: PropTypes.func.isRequired,
// newTopic: PropTypes.string
};

function mapStateToProps(state) {
  return {
    // topics: state.topic.topics,
    // newTopic: state.topic.newTopic
    selectedOptions: state.selectedOptions.options,
    contactInfo: state.selectedOptions.contactInfo
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, {
  setSelectedOption,
  saveOptionsAndContact,
  resetStore
})(CategoryWrapperContainer);
