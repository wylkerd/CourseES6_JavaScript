"use strict";

var arr = [1, 3, 4, 5, 10]; //function(item) é uma função anônima, melhor lugar para se usar errow function =>
// quando a função recebe apenas um parâmetro pode-se remove-los (item) para item =>
// quando só tem um retorno, o mesmo pode ficar desta seguinte forma

var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr); //retorno de string

var testefunc = function testefunc() {
  return 'teste função';
};

console.log(testefunc()); //retorno de função

var testefunc2 = function testefunc2() {
  return [1, 2, 3];
};

console.log(testefunc2()); //retorno de objeto

var testefunc3 = function testefunc3() {
  return {
    nome: "Wylkerd"
  };
};

console.log(testefunc3());
