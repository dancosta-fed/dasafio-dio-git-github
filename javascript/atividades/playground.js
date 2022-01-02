const alunos = [
    {   
        nome: 'João' ,
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C',
    },

    {
        nome: 'Julio',
        nota: 4,
        turma: '2C',
    },
];

function alunosAprovados (arr, media){

    let aprovados = [];
    for(i=0; i < arr.length; i++){

        const {nota, nome} = arr[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
} 

console.log(alunosAprovados (alunos, 5));

// === exercicio 2 === //

function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'Paulo',
    idade: 6,
};

const pessoa2 = {
    nome: 'carla',
    idade: 26,
};

const animal = {
    nome: 'Apollo',
    idade: 10,
    raça: 'husky',
};

console.log(calculaIdade.call(animal, 25)); // call
console.log(calculaIdade.apply(animal, [4])); // apply