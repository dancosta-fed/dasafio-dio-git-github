// function numbersCompared(num1, num2){
//     const sameNums = num1 === num2;
//     const sum = num1 + num2;

//     if(sameNums){
//         return "They're the same!";
//     }

//     return "They're NOT the same!"

//     return sameNums ? `The're the same` : `They're not the same.` // if Ternário

    
// }

function numbersCompared(num1, num2){
    const firstBit = newFirstBit(num1, num2);
    const secondtBit = newSecondtBit (num1, num2);

    return `${firstBit} ${secondtBit}`

}

function newFirstBit(num1, num2){
    let sameNums = '';
    if(num1 !== num2){
        sameNums = 'not'
    }

    return `The numbers ${num1} and ${num2} are ${sameNums} the same!`
}

function newSecondtBit(num1, num2){
    const soma = num1 + num2;

    let result10 = 'not bigger than';
    let result20 = 'not bigger than';

    const numTen = soma > 10;
    const numTwenty = soma > 20;

    
    if(numTen){
        result10 = 'more than';
    }

    if(numTwenty){
        result20 = 'more than';
    }

    return `The sum is ${soma}, and the numbers ${numTen} 10 and ${numTwenty} 20.`
}

console.log(numbersCompared(1, 2));