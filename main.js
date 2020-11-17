class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

// Const: Variaveis que não podem ter o valor reatribuido
const a = 1;

// Mutação de variavel tipo Obj através da key word const
const usuario = {name: "Heloisy"};

usuario.name = "Wylkerd";

console.log(usuario);

// Variaveis de escopo usam a Key word "let"
function teste(x){
    let y = 2;

    if (x > 5){
        let y = 4;
        console.log(x, y);
    }
}
teste(10);