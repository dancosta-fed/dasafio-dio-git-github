const meuArrary = [30,30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet]; // usando o "[...] faz com que seja criado um novo arr com os valores. 
}

console.log(valoresUnicos(meuArrary));