import React from 'react'

const Button = ({ text, setDados, dados, setLoading }) => {
  async function handleClick(event) {
    setLoading(true);
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText.toLowerCase()}`);
    const json = await response.json();
    if(!dados) {
      setDados(json);
      setLoading(false)
    } else {
      if(dados.nome == event.target.innerText){
        setDados(null);
        setLoading(false);
      } else {
        setDados(json)
        setLoading(false);
      }
    }
  }
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

export default Button
