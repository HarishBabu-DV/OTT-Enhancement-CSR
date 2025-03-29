import React from 'react'

const Input = ({type,name,id,placeholder,className,...props}) => {
  return (
    <input type={type} name={name} id={id} placeholder={placeholder} className={`${className}`} {...props} />
  )
}

export default Input