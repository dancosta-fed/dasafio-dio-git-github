const userInput = document.querySelector(".to-do input");
const addBtn = document.querySelector(".to-do button");
const toDoList = document.querySelector(".tasks");
const clearAll = document.querySelector(".footer button")

// ==== Fazendo um botão de ADD ficar disabled até que algo seja inserido ==== //
userInput.onkeyup = ()=>{
    let userData = userInput.value; 
        if(userData.trim() != 0){  
            addBtn.classList.add("active"); 
    } else if (userData.trim() === 0){
            addBtn.classList.remove("active");
    }
}

// ==== Adicionando os intens à lista ==== //

showTasks(); //Pra ter as tasks ao atualizar a página!

addBtn.onclick = (e)=>{
    e.preventDefault()
    let userData = userInput.value;
    let getLocalStorage = localStorage.getItem("Nova Lista");
    if(getLocalStorage === null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("Nova Lista", JSON.stringify(listArr));
    showTasks(); 
}

function showTasks(){
    let getLocalStorage = localStorage.getItem("Nova Lista");
    if(getLocalStorage === null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    let newLiTag = '';
    listArr.forEach((element, index) =>{
        newLiTag += `<li class="user-input"></i><p class="lista">${element}</p><span onclick = "taskDone(${ index})"><i class="far fa-trash-alt"></span></li>`;
    });
    toDoList.innerHTML = newLiTag;
    userInput.value = "";
}

// ==== removing itens da lista ==== //


function taskDone(index){
    let liItem = document.querySelector(".user-input")
    let getLocalStorage = localStorage.getItem("Nova Lista");
    listArr = JSON.parse(getLocalStorage);
    
    listArr.splice(index, 1); // removing the particular li

    // update
    localStorage.setItem("Nova Lista", JSON.stringify(listArr));
    showTasks();
}

// ==== Usar o Botão de limpar tudo ==== //
clearAll.onclick = () =>{
    listArr = [];

    // update
    localStorage.setItem("Nova Lista", JSON.stringify(listArr));
    showTasks();

}

