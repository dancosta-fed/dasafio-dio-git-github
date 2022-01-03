function filtraPares(arr) {
	if (!arr || !arr.length) return;

	const filteredArr = arr.filter((item) => item % 2 === 0);

	return filteredArr;
}

const meuArr = [1, 3, 4, 5, 6, 7, 8, 9]

// ou assim:

function pegaPar(array){
    return array.filter(callback);
}

function callback(item){
    return item % 2 == 0;
}

const outroArr = [1, 3, 4, 5, 6, 7, 8, 9]


console.log('Func 1:', filtraPares(meuArr));
console.log('Func 2:', pegaPar(outroArr));

// Pra pegar ímpar era só usar !==