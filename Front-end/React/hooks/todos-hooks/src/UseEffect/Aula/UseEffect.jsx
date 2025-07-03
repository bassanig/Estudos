import React from 'react'
import Produto from './Produto';

const UseEffect = () => {
  // const [ contar, setContar ] = React.useState(1);
  // const [ dados, setDados ] = React.useState(null);

  // React.useEffect(() => {
  //   fetch('https://ranekapi.origamid.dev/json/api/produto/smartphone')
  //   .then(r => r.json())
  //   .then(json => setDados(json));
  // }, [])

  const [ ativo, setAtivo ] = React.useState(false);

   React.useEffect(() => {
      function handleScroll(event) {
        console.log(event);
      }
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
  }, [])

  return (
    <>
      {/* {dados && <div>
          <h1>{dados.nome}</h1>
          <p>{dados.preco * contar}</p>
        </div>}
      <button onClick={() => setContar(contar + 1)}>{contar}</button> */}
      {ativo && <Produto />}
      <button onClick={() => setAtivo(!ativo)}>Toggle</button>
    </>
  )
}

export default UseEffect