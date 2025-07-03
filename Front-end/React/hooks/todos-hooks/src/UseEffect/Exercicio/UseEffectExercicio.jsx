import React from 'react'
import Button from './Button'
import Produto from './Produto';


// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo


const UseEffectExercicio = () => {
  const [preferencia, setPreferencia] = React.useState(localStorage.getItem('preferencia') ? localStorage.getItem('preferencia') : null);
  const [produto, setProduto] = React.useState(null);
  
  React.useEffect(() => {
    if (preferencia) {
      async function getData() {
        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${preferencia}`);
        const data = await response.json();
        setProduto(data);
      }
      getData();
    }
  }, [preferencia]);

  if(preferencia) {
    setPreferencia(preferencia)
  }

  return (
    <div>
      <div>
        <h4 className='text-4xl font-bold mb-4'>Preferência: {produto ? produto.id : localStorage.getItem('preferencia')} </h4>
      </div>
      <div className='space-x-2'>
        <Button text='notebook' setProduto={setProduto} setPreferencia={setPreferencia} />
        <Button text='smartphone' setProduto={setProduto} setPreferencia={setPreferencia} />
      
      </div>
    </div>
  )
}

export default UseEffectExercicio