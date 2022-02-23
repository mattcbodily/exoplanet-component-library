import React from 'react'
import PropTypes from 'prop-types'

export const Button = React.forwardRef((props, ref) => (
  <button 
    onClick={props.onClick}
    ref={ref}
    style={props.style}
  >
    {props.children}
  </button>
))

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
}
