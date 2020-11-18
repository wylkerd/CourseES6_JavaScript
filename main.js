function soma(a = 3, b = 6){
    return a + b;
}

//atribui o valor a posição "a"
console.log(soma(1));
console.log(soma());

const somaArrow = (a = 3, b = 6) => a + b;

//atribui o valor a posição "a"
console.log(soma(1));
console.log(soma());
