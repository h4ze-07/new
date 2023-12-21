import React from 'react'



const Button = ({children}) => {

  return (
    <div>{children}</div>
  )
}

Button.defaultProps = {
    children: 'Default'
}

export default Button