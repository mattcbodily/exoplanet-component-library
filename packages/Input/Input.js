import React from 'react'
import PropTypes from 'prop-types'

export const Input = React.forwardRef((props, ref) => (
  <input
    onChange={props.onChange}
    ref={ref}
    type={props.inputTypes || 'text'}
    value={props.value}
  />
))

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  inputTypes: PropTypes.string.isRequired,
  value: PropTypes.value.isRequired
}
