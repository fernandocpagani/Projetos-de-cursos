//selecionando elementos necessarios

const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');

//selecionar campo de filtro

const filterInput = document.querySelector('#filter-input')

//funçao para recuperar tarefas do armazenamento

function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }


tasks.forEach(function(task){
    const li = document.createElement('li');
    li.textContent=task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent='X';
    deleteButton.classList.add('delete');
    li.appendChild(deleteButton);
    taskList.appendChild(li);
})
}

//função para armazenar tarefa no armazenamento local

function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else {
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

//função para remover tarefa do armazenamento local

function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks')===null) {
        tasks= [];
    }else {
        tasks= JSON.parse(localStorage.getItem('tasks'));
    }
//pegar apenas o texto da tarefa, sem o "x"
    let taskText = taskItem.textContent.slice(0,-1);

    tasks.forEach(function(task,index){
        if(taskText===task) {
            tasks.splice(index,1);
        }
    });

    localStorage.setItem('tasks',JSON.stringify(tasks));
}

//atualizar função addTask

function addTask(e){
    e.preventDefault();

    if(taskInput.value.trim()){
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        const deleteButton = document.createElement('button');
        deleteButton.textContent="X";
        deleteButton.classList.add('delete');
        
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        //armazenar tarefa no armazenamento local

        storeTaskInLocalStorage(taskInput.value);
        taskInput.value='';
    }else {
        alert('Por favor, digite uma tarefa.');
    }
}

function deleteTask(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Tem certeza de que dexeja excluir esta tarefa?')){
            e.target.parentElement.remove();
            //remover tarefa do armazenamento local
            removeTaskFromLocalStorage(e.target.parentElement);
        }
    }
}

//função para filtrar tarefas
function filterTasks(e) {
    const text=e.target.value.toLowerCase();
    document.querySelectorAll('#task-list li').forEach(function (task){
        const item=task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text)!==-1){
            task.style.display='block';
        }else {
            task.style.display='none';
        }
    });
}

//adicionar evento de tecla para o campo de filtro

filterInput.addEventListener('keyup',filterTasks);

//adicionar evento de DOMContentLoaded para recuperar tarefas

document.addEventListener('DOMContentLoaded',getTasks)

//adicionar evento de click para exclusão de tarefa

taskList.addEventListener('click', deleteTask)

//adicionando o evento de submit ao form

form.addEventListener('submit', addTask);

