// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const Mensagem = () => {
  return (
    <>
      <span className="text-3xl font-medium">Você ta gastando muito boy</span>
    </>
  )
}

const App = () => {
  const dados = mario;
  const totalGasto = dados.compras.reduce((acumulador, compra) => {
    const precoNumero = +compra.preco.replace("R$ ", "")
    return acumulador + precoNumero;
  }, 0)

  return (
    <>
      <div className="flex flex-col gap-2">
        <h4 className="text-3xl font-medium">Nome: {dados.cliente}</h4>
        <h4 className="text-3xl font-medium">Idade: {dados.idade}</h4>
        <h4 className="text-3xl font-medium">Situação <span className={dados.ativa ? "text-green-500" : "text-red-500"}>{dados.ativa ? "Ativo" : "Inativo"}</span></h4>
        <h4 className="text-3xl font-medium">Total gasto: {totalGasto}</h4>
        {totalGasto >= 10000 && <Mensagem /> }
      </div>
    </>
  )
}

export default App
