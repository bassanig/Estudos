import React from 'react'

const Produto =  ({ dados }) => {
  return (
    <div className='mt-8'>
      <h4 className='text-4xl font-bold'>{dados.nome}</h4>
      <p>R$ {dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </div>
  )
}

export default Produto