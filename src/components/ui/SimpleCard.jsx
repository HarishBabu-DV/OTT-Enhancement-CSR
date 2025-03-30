import React from 'react'

const SimpleCard = ({className,children}) => {
  return (
    <div className={`${className}`}>
        {children}
    </div>
  )
}

export default SimpleCard