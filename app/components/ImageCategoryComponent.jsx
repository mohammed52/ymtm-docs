import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { setSelectedOption } from '../actions/selectedOptionsActions';
import styles from '../css/components/CategoryImageStyles.css';
import { MASTER_OPTIONS } from './helpers/MASTER_OPTIONS';
import ImageOptionComponent from './ImageOptionComponent';

import { optionIsSelectedInCategory } from './helpers/categoryHelpers'

// const cx = classNames.bind(styles);

class ImageCategoryComponent extends Component {
  p
  constructor(props) {
    super(props);
    this.saveSelectedOptionInStore = this.saveSelectedOptionInStore.bind(this);
  }

  componentDidMount() {
    console.log("ImageCategoryComponent componentDidMount");
  }

  saveSelectedOptionInStore(optionId) {

    const setSelectedOption = this.props.setSelectedOption
    setSelectedOption(this.props.category.categoryId, optionId, this.props.index);
  }

  render() {

    // let optionsObject = MASTER_OPTIONS
    // let currentCategory = MASTER_OPTIONS[this.props.categoryIndex];
    let options = this.props.category.options;

    // const selectedOptions = this.props.selectedOptions;

    let imageOptionCompArr = []
    for (var i = 0; i < options.length; i++) {
      let currentImageOption = options[i];

      let tmpIsOptionSelected = false;

      if (this.props.selected.selected &&
        this.props.selected.categoryId === this.props.selected.categoryId &&
        this.props.selected.optionId === currentImageOption.optionId) {
        tmpIsOptionSelected = true
      }

      imageOptionCompArr.push(
        <ImageOptionComponent key={"imageOptionCompArr" + i}
                              option={currentImageOption}
                              className={[styles.testRed].join(' ')}
                              saveSelectedOptionInStore={this.saveSelectedOptionInStore}
                              isSelected={tmpIsOptionSelected} />
      )
    }

    return (
      <div>
        <div className={[styles.categoryImageWrapper].join(' ')}>
          <div className={[styles.categoryHeader].join(' ')}>
            {this.props.category.categoryHeader}
          </div>
          <br/>
          {imageOptionCompArr}
        </div>
      </div>

      );
  }
}

ImageCategoryComponent.propTypes = {
  category: PropTypes.object.isRequired,
  selected: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,

  setSelectedOption: PropTypes.func.isRequired,

// selectedOptions: PropTypes.object,
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
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, {
  // setSelectedOption,
})(ImageCategoryComponent);
