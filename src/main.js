class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.querySelector("#repo-form");
        this.listEl = document.querySelector("#repo-list");

        this.registerHandles();
    }

    // cadastro da fução register handlers (registrar eventos)
    registerHandles() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(event) {
        event.preventDefault();

        this.repositories.push({
            name:'Wylkerd',
            description:'Desenvolvimento de modelos preditivos com Python. Desenvolvimento de modelos e APIs.',
            avatar_url:'https://avatars0.githubusercontent.com/u/50023013?v=4',
            html_url:'https://github.com/wylkerd',
        });

        this.render();
    }

    render() {
        this.listEl.innerHTML = '';

        this.repositories.forEach( repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target', '_blank');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);
        });
    }
}

new App();