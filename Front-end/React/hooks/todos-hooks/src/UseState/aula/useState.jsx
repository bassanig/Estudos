import React from 'react'
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const useState = () => {
  // const [ active, setActive ] = React.useState(false);
  // const info = {nome: 'Guilherme', idade: 15}

  // const [ dados, setDados ] = React.useState(info);

  // function handleClick() {
  //   setActive(!active)
  //   setDados({...dados, faculdade: 'Possui Faculdade'})
  // }

  // const [modal, setModal ] = React.useState(false);

  const [ contar, setContar ] = React.useState(1);
  const [ items, setItems ] = React.useState(['Item 1']);

  function handleClick2() {
    setContar((contar) => {
      return contar + 1
    })

  setItems((items) => {
    return [...items, `item ${contar + 1}`]
  })
  }
  
  return  (
  <div>
    {/* <p>{dados.nome}</p>
    <p>{dados.idade}</p>
    <p>{dados.faculdade}</p>
    <button onClick={handleClick}>{active ? 'active' : 'unactive'}</button> */}
    {/* 
    {modal && <Modal />}

    <ButtonModal setModal={setModal} modal={modal} /> */}
    
    <ul>
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>
    <button onClick={handleClick2}>{contar}</button>
  </div>
)
}

export default useState