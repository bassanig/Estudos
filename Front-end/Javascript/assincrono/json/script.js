fetch('./dados.json')
.then(r => {
    r.json().then(json => {
        console.log(json);
    })
})

//aula mais teorica