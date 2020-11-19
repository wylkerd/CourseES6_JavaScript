const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK')}, 2000);
}); 

//minhaPromise().then(response => ...);

// É como se fosse um .then, o que se espera, ou como um promise
// Não pode executar o await fora de uma function
// ******************************************************
// async function executaPromise() {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());    
// }

// executaPromise();
// ******************************************************

const excutaPromise = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
};

excutaPromise();
