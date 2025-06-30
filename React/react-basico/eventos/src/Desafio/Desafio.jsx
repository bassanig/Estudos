import React from 'react'
import Header from './Header'
import Home from './home/Home'
import Produtos from './produtos/Produtos'

const Desafio = () => {
  let Pagina = Home;
  const { pathname } = window.location;
  
  if(pathname === '/produtos') {
    Pagina =  Produtos;
  } else {
    Pagina = Home;
  }
  
  return (
    <div className="px-4">
        <Header />
        <Pagina />
    </div>
  )
}

export default Desafio