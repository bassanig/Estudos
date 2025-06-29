function iniciarFetch() {
    fetch("./dados.json")
    .then(r => {
        r.json()
        .then(body => {
            console.log(body);
        })
    })
}

async function puxarDados() {
    const promiseDados = fetch("./dados.json");
    const jsonDados = await (await promiseDados).json();

    const promiseCLientes = fetch("./clientes.json");
    const jsonClientes = await (await promiseCLientes).json();
}
puxarDados()
