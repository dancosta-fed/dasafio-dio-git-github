let currentNumber = document.getElementById('currentNumber');
let count = 0;


    function increment(){
        count++;
        currentNumber.innerHTML = count;
    }

       
    function decrement(){
        
        count = count--;
        currentNumber.innerHTML = count;
        
        
        if(count < 0){
            let dec = document.getElementById('decrement');
            dec.setAttribute('disabled', 'disabled');
            return
        } 
        
    }
    
    // let add = document.getElementById('increment').addEventListener('click', increment());
    // let less =document.getElementById('decrement').addEventListener('click', decrement());
    

  




   


