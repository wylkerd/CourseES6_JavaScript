const usuario = {
 nome: 'wylkerd',
 idade: 20,
 endereço: {
     cidade: 'Santos',
     estado: 'SP',
 },
}

console.log(usuario);

// Desestruturação de objeto
const { nome, idade, endereço: { cidade } } = usuario;

console.log(nome, idade, cidade);
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome, endereço: { estado } }) {
    console.log(nome, estado);
}

mostraNome(usuario);
