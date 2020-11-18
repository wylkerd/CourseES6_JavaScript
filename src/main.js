const minhaPromisse = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK')}, 2000);
}); 

minhaPromisse().then(response => {
    console.log(response);
})