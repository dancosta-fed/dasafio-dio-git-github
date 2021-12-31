const userInput = document.querySelector(".to-do input");
const addBtn = document.querySelector(".to-do button");
const toDoList = document.querySelector(".tasks")

userInput.onekeyup = ()=>{
    let userData = userInput.value; //voltar aqui para resolver essa situação!!!!
        if(userData.trim() != 0){  
            addBtn.classList.add("ativo"); 
    } else {
            addBtn.classList.remove("ativo");
    }
}

addBtn.onclick = ()=>{
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
        newLiTag = `<li>${element}<span><i class="fas fa-trash"></i></span></li>`;
        console.log('teste');
    });
    toDoList.innerHTML = newLiTag;
}    







// document.querySelector('#push').onclick = function(){
//     if (document.querySelector('#newtask input').value){
//             document.querySelector('#tasks').innerHTML += `
//             <div class="task">
//                 <span id="taskname">
//                     ${document.querySelector('#newtask input').value}
//                 </span>
//                 <button class="delete">
//                     <i class="far fa-trash-alt"></i>
//                 </button>
//             </div>
//         `;

//     }
// }