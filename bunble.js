"use strict";

function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
} //atribui o valor a posição "a"


console.log(soma(1));
console.log(soma());

var somaArrow = function somaArrow() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
}; //atribui o valor a posição "a"


console.log(soma(1));
console.log(soma());
