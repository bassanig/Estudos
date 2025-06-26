
import './style.css'

const initPegarTexto = () => document.querySelector('.js-tarefa').value;


function initAdicionarTarefa() {
    const inputTarefa = document.querySelector('.js-tarefa');
    const adicionarTarefaBtn = document.querySelector('.js-adicionar-btn');
    const divTarefas = document.querySelector('.js-caixa-tarefas');
    let contadorTarefas = 1;

    function adicionarTarefa() {
       const tarefa = initPegarTexto();

       if(tarefa.length !== 0) {
        const divTarefa = document.createElement('div');
        const tarefaInput = document.createElement('input');
        const tarefaLabel = document.createElement('label');

        divTarefa.className = 'flex items-center gap-2 bg-yellow-400 py-2 px-4 rounded-lg';
        tarefaInput.className = 'size-4 text-purple-950';
        tarefaInput.type = 'checkbox';
        tarefaInput.id = `tarefa${contadorTarefas}`;
        tarefaLabel.className = 'text-black';
        tarefaLabel.htmlFor = tarefaInput.id;
        tarefaLabel.innerText = tarefa;

        divTarefa.appendChild(tarefaInput);
        divTarefa.appendChild(tarefaLabel);
        divTarefas.appendChild(divTarefa);

        document.querySelector('.js-tarefa').value = "";
        contadorTarefas++;

        if (contadorTarefas > 1) {
            document.querySelector('.js-unactive').classList.add('unactive');
        }
        
       } else  {
        alert('Você deve adionar algum texto a tarefa');
       }
    }

    adicionarTarefaBtn.addEventListener('click', adicionarTarefa)
    inputTarefa.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            adicionarTarefa()
        }
    });

}

initAdicionarTarefa()

//adcionar o removedor de tarefa
//adicionar atributos da tarefa, dhoia, ra, grau de urgencia, que pessoa vai fazer?


