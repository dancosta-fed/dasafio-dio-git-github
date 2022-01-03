function somaNumeros(arr) {
	if (!arr || !arr.length) return;
	const soma = arr.reduce((prev, curr) => prev + curr);

	return soma;
}


const arr = [1, 2];

console.log(somaNumeros(arr));

// ou assim também:

function somaNumeros(array){
    return array.reduce(function(prev, curent){
        return prev + curent;
    })
}

const arr2 = [1, 2];

console.log(somaNumeros(arr2));