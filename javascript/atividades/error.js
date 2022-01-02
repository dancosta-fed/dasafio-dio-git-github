function meuErro (arr, num){
   try{ if(!arr && !num)
        throw new ReferenceError('Insert params');

        if(typeof arr !== 'object') throw new TypeError('Arr needs to be an object!');
        if(typeof num !== 'number') throw new TypeError('Num needs to be a number!');

        if(arr.length !== num) throw new RangeError('They both need to be same length');

        return arr;
    } 
    catch(e){
        if(e instanceof ReferenceError){
            console.log('This is a ReferenceError')
            console.log(e.message)
        } else if (e instanceof TypeError){
            console.log('This is a TypeError')
            console.log(e.message)
        } else  if (e instanceof RangeError){
            console.log('This is a RangeError')
            console.log(e.message)
        } else {
            console.log('Tipo de erro não esperado:' + e);
        }

    } 
}

console.log(meuErro()); // ReferenceError
console.log(meuErro(2, 2)); // TypeError
console.log(meuErro(['oi'], 'oi')); // TypeError 
console.log(meuErro([1, 2, 3], 5)); // RangeError
console.log(meuErro([1, 2, 3], 3)) // No errors