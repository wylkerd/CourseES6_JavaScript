"use strict";

var usuario = {
  nome: 'wylkerd',
  idade: 20,
  endereço: {
    cidade: 'Santos',
    estado: 'SP'
  }
};
console.log(usuario); // Desestruturação de objeto

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereço.cidade;
console.log(nome, idade, cidade);
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      estado = _ref.endereço.estado;
  console.log(nome, estado);
}

mostraNome(usuario);
