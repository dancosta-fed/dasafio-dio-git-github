const currentNumber = document.getElementById("currentNumber");
const dec = document.getElementById("decrement"); 
const inc = document.getElementById("increment")

let count = 0;

function increment() {
  dec.removeAttribute("disabled");
  count = ++count;
  currentNumber.innerHTML = count;

  if (count >= 5){
    currentNumber.style.color = "#0494ef";
  }

  if (count >= 10) {
    inc.setAttribute("disabled", true);
    alert("Eita! Não dá pra ir mais que isso!");
  } 

}

function decrement() {
  inc.removeAttribute("disabled");
  count = --count;
  currentNumber.innerHTML = count;

  if (count < 5){
    currentNumber.style.color = "#d91e2b";
  }

  if (count <= 0) {
    dec.setAttribute("disabled", true);
    alert("Eita! Não dá pra ir mais que isso!");
  }
}





   


