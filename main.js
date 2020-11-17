const arr = [1, 3, 4, 5, 10];

// Funções para trabalhar com arrays/vetores no ES6
// Função map() percorre o vetor e retorna uma informação igual ou nova
const newArr = arr.map(function(item, index)
{
    return (item + index) * 2;
}) 

console.log(newArr);

// Função reduce() consome todo o vetor e retorna uma única informação

const sum = arr.reduce(function(total, next)
{
    return total + next;   
});

console.log(sum);

// Função filter() filtra o conteudo do array

const filter = arr.filter(function(item){
    return item % 2 === 0;
});

console.log(filter);

// Função find() verifica se exite determinada informção no array
const find = arr.find(function(item){
    return item === 4;
});

console.log(find);
