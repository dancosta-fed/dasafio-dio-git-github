const userInput = document.querySelector(".to-do input");
const addBtn = document.querySelector(".to-do button");
const toDoList = document.querySelector(".tasks");


userInput.onkeyup = ()=>{
    let userData = userInput.value; 
        if(userData.trim() != 0){  
            addBtn.classList.add("active"); 
    } else if (userData.trim() === 0){
            addBtn.classList.remove("active");
    }
}
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
        newLiTag += `<li class="user-input"><input type="checkbox" id="c-box">${element}</li>`;
    });
    toDoList.innerHTML = newLiTag;
    userInput.value = "";
}


doneTask();
function doneTask(){
    // const cBox = document.querySelector('#c-box:checked') !== null;
    const cBox = document.querySelector('#c-box');
    const domLi = document.querySelector('li');
    console.log(domLi);

    let activeBox = cBox.setAttribute(true, "checked");
    
    // activeBox.forEach(element => {
    //     console.log('funcionou');
    // });


    // forEach (cBox.setAttribute(true, "checked")){
    //     console.log('funcionou');
    // } 
}
// doneTask();




//cBox.addEventListener("checked", "false" );
//     // cBox.innerHTML= `<del>${element}}</del>`;
//     console.log('Deu certo!');
// } else{
//     console.log('deu bom!')
// }

// // checkBox();
// function checkBox(){
//     console.log('teste2');
//     let cBox = document.querySelectorAll(".user-input");
//     console.log(cBox);

//     // if(cBox.setAttribute('checked', true)){
//     //     // cBox.innerHTML= `<del>${element}}</del>`;
//     //     console.log('Deu certo!');
//     // } else{
//     //     console.log('deu bom!')
//     // }
// }




