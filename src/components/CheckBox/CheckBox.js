import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CheckBox.scss';

class CheckBox extends Component {
  onClick = (event) => {
    if (!this.props.readOnly) {
      this.props.onChange(this.props.name, event);
    }
  }
  render() {
    const props = this.props;
    const { className, text } = props;
    return (
      <label className={'checkbox-container' + (className ? ` ${className}` : '')}>{text}
        <input
            type='checkbox'
            id={props.id}
            checked={props.value}
            disabled={props.disabled}
            onChange={this.onClick}
            readOnly={props.readOnly}
        />
        <span className={props.colorClassName ? `checkmark ${props.colorClassName}` : 'checkmark'}></span>
      </label>
    );
  }
};

CheckBox.propTypes = {
  title: PropTypes.any,
  name: PropTypes.any.isRequired,
  value: PropTypes.bool,
  text: PropTypes.string,
  className: PropTypes.string,
  grayText: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
}

CheckBox.defaultProps = {
  title: ''
}

export default CheckBox;