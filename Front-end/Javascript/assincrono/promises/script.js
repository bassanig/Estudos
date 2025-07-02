// const promessa = new Promise((resolve, reject) => {
//     let condicao = false;
//     if(condicao) {
//         setTimeout(() => {
//             console.log('teste');
//             resolve(['banana', 'uva']);
//         })
//     }  else {
//         reject('catch');
//     }
// });

// const resultado = promessa.then(resolucao => {
//     resolucao.push('arroz');
//     console.log(resolucao);
//     return resolucao
// }, resolucao => {
//     console.log(resolucao);
// })
// .finally(() => {
//     console.log('acabou');
// })

const login = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Usuario Logado')
    }, 1000)
})

const dados = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Dados carregados')
    }, 3000)
})

const carregouTudo = Promise.race([login, dados]);
carregouTudo.then(resolucao => {
    console.log(resolucao);
})