import React from 'react'

const ButtonModal = ({ setModal, modal }) => {
  return (
    <button onClick={() => setModal(!modal)}>Modal</button>
  )
}

export default ButtonModal