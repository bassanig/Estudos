
// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

import React from "react"
import Button from "./Button"
import Produto from "./Produto";

const Exercicio = () => {
  const [ dados, setDados ] = React.useState(null);
  const [ loading, setLoading ] = React.useState(null)

  return (
    <div className="space-x-4">
      <Button text={"Tablet"} setDados={setDados} dados={dados} setLoading={setLoading}/>
      <Button text={"Smartphone"} setDados={setDados} dados={dados} setLoading={setLoading}/>
      <Button text={"Notebook"} setDados={setDados} dados={dados} setLoading={setLoading}/>
      {loading && <p>Carregando...</p>}
      {dados && <Produto dados={dados}/>}
    </div>
  )
}

export default Exercicio