import React from 'react'

export const Input = React.forwardRef((props, ref) => (
  <input
    onChange={props.onChange}
    ref={ref}
    type={props.inputTypes || 'text'}
    value={props.value}
  />
))
