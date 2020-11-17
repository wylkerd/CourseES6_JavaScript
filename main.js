const arr = [1, 3, 4, 5, 10];


//function(item) é uma função anônima, melhor lugar para se usar errow function =>
// quando a função recebe apenas um parâmetro pode-se remove-los (item) para item =>
// quando só tem um retorno, o mesmo pode ficar desta seguinte forma
const newArr = arr.map(item => item * 2);

console.log(newArr);

//retorno de string
const testefunc = () => 'teste função';
console.log(testefunc());

//retorno de função
const testefunc2 = () => [1, 2, 3];
console.log(testefunc2());


//retorno de objeto
const testefunc3 = () => ({ nome: "Wylkerd"});
console.log(testefunc3());
