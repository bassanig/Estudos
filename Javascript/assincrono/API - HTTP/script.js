const url = 'https://jsonplaceholder.typicode.com/posts/';
const options = {
    method: 'POST',
    body: '{"title": "Javascript"}',
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
}

fetch(url, options)
.then(r => {
    r.json().then(body => {
        console.log(body);
    })
})

//post é para mandar dados para api
//put manda tbm mas normalmente é para modificar algum dado da api
//get é o padrao, que puxa
//HEAD é o que mostra as headers da api

//ele mostrou só principais protocolos http para interegir com com a api, pq o curso é de front, entao a gente 
//usuaria mais o get mesmo