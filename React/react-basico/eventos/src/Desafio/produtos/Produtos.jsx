import React from 'react'
import Titulo from '../Titulo';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  { nome: 'Geladeira', propriedades: ['4gb ram', '324gb'] },
];

const Produtos = () => {
  return (
    <div>
      <Titulo text="Produtos"/>
      {produtos.map(({ nome, propriedades }) => 
      <div className='border-2 border-neutral-900 mb-4 p-4' key={nome}>
        <h4>{nome}</h4>
        <ul>
          {propriedades.map(prop => <li className='list-none' key={prop}>{prop + " "}</li>)}
        </ul>
      </div>)}
    </div>
  )
}

export default Produtos