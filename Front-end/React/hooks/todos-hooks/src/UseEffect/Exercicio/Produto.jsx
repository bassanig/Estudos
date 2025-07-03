import React from 'react'

const Produto = ({produto}) => {
  return (
    <div className='mt-4'>
      <h4 className='text-2xl font-bold'>Nome: {produto.id}</h4>
      <h4 className='text-2xl font-bold'>Preço: {produto.preco}</h4>
    </div>
  )
}

export default Produto