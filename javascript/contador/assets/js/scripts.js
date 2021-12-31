const currentNumber = document.getElementById("currentNumber");
const dec = document.getElementById("decrement"); 
const inc = document.getElementById("increment")


let count = 0;

function increment() {
  dec.removeAttribute("disabled");
  count = ++count;
  currentNumber.innerHTML = count;

  if (count >= 5){
    currentNumber.style.color = "lightcoral"; //#0494ef
    currentNumber.style.transition ="2s";
    document.body.style.backgroundColor ="lightcoral";
    document.body.style.transition ="2s";
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
    currentNumber.style.color = "#f56b49";
    currentNumber.style.transition ="2s";
    document.body.style.backgroundColor ="#f56b49";
    document.body.style.transition ="2s";
  }

  if (count <= 0) {
    dec.setAttribute("disabled", true);
    alert("Eita! Não dá pra ir mais que isso!");
  }
}





   


