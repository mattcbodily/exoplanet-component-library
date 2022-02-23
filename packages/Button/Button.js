import React from 'react'

export const Button = React.forwardRef((props, ref) => (
  <button 
    onClick={props.onClick}
    ref={ref}
  >
    {props.children}
  </button>
))
