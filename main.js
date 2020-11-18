// REST = Serve para pegar o resto das propriedades
// Rest operator em objetos
const usuario = {
    nome: 'Wylkerd',
    idade: 20,
    empresa: 'WylkerDev'
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

// Rest operator em vetores
const arr= [1 ,2, 3, 4];

const [ a, b, ...c ] = arr;

console.log(a);
console.log(b);
console.log(c);

// Rest operator em parâmetros de funções
function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4));

function mostraParams(a, b, ...params) {
    return params;
}

console.log(mostraParams(1, 3, 4, 5));

// SPREAD OPERATOR = Propaga os items de um array para outra estrutura de dados
// Em arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2 ];

console.log(arr3)

// Em objetos
const usuario1 = {
    nome: 'Wylkerd',
    idade: 20,
    empresa: 'Rocketseat',    
};

const usuario2 = { ...usuario1, nome: 'Gabriel' };

console.log(usuario2);