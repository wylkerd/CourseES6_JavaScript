class List {
    constructor(){
        this.data = [];
    }
    // Funções da classe
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}
// classe com herança da classe List
class TodoList extends List {
    constructor(){
        // Chamando método construtor da classe pai "List"
       super();
       
       this.usuario = 'Wylkerd Santos';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}
//instanciando a classe TodoList. Variavel com uma nova lista
const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();