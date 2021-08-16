import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = props => (    
  <button
    type={props.type}
    className={((props.size) === '' ? 'btn-bs' : 'btn-' + props.size) + ' btn-btn-' + props.variant + (props.className ? ` ${props.className}` : '')}
    style={props.style}
    disabled={ props.disabled }
    onClick={props.onClick}
  >
    {props.icon} {props.text}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func,
};
  
Button.defaultProps = {
  size: '',
  variant: '',
  disabled: false
};

export default Button;