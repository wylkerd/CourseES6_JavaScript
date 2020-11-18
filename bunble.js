"use strict";

// Template literals: Forma de incluir variáveis dentro de strings no JavaScript a partir do ES6
var nome = "wylkerd";
var idade = 20; // console.log('Meu nome é '+ nome +' e tenho '+ idade + ' anos.');
// USA-SE CRASE ``

console.log("Meu nome \xE9 ".concat(nome, " e tenho ").concat(idade, " anos."));
