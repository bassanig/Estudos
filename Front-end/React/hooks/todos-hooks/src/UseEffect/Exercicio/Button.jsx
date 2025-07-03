import React from 'react'

const Button = ({ text, setProduto, setPreferencia }) => {

  const handleClick = (event) => {
    const produtoBtn = event.target.innerText;
    localStorage.setItem('preferencia', produtoBtn);
    setPreferencia(produtoBtn);
  }

  return (
    <button onClick={handleClick}>{text}</button>
  )
}

export default Button