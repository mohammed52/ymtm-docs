import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from '../css/components/ImageOptionStyles';

import MEK from '../images/MEK.png';

class ImageOptionComponent extends Component {
  constructor(props) {
    super(props)
    this.saveOption = this.saveOption.bind(this)
  }
  saveOption() {
    // console.log("saveOption: " + this.props.option.optionId);
    const saveSelectedOptionInStore = this.props.saveSelectedOptionInStore

    saveSelectedOptionInStore(this.props.option.optionId)
  }

  render() {
    const option = this.props.option;

    let wrapperStyle = "";
    if (this.props.isSelected) {
      wrapperStyle = [styles.ImageOptionWrapperSelected, styles.testRed].join(' ')
    } else {
      wrapperStyle = [styles.ImageOptionWrapperUnselected, styles.testRed].join(' ')

    }

    return (
      // <div className={cx('vote')}>
      <div className={wrapperStyle}
           onClick={this.saveOption}>
        <img src={option.imageUrl}
             alt={option.name}
             className={[styles.opionImage, 'img-responsive'].join(' ')} />
        <div className={[styles.headerText].join(' ')}>
          {option.headerText}
        </div>
        <div className={[styles.subHeaderText].join(' ')}>
          {option.subHeaderText}
        </div>
      </div>
    );
  }
}

ImageOptionComponent.propTypes = {
  option: PropTypes.object.isRequired,
  saveSelectedOptionInStore: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
// categoryIndex: PropTypes.number.isRequired,
// topics: PropTypes.array.isRequired,
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
})(ImageOptionComponent);
