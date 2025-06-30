import React from 'react'

const Input = ({ label, id, ...props }) => {
  return (
  <div className="mb-4">
    <label htmlFor={id} className="mb-2" {...props}>{label} </label>
    <input type="text" placeholder="form" id={id} {...props}/>
  </div>
)
  
}

export default Input