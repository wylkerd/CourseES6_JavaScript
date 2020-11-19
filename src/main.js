class App {
    constructor() {
        this.repositories = [];

        this.formEl = document.querySelector("#repo-form");

        this.registerHandles();
    }

    // cadastro da fução register handlers (registrar eventos)
    registerHandles() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    addRepository(event) {
        event.preventDefault();

        this.repositories.push({
            name:'rocketseat.com.br',
            description:'Tire a sua ideia do papel e de vida a sua startup.',
            avatar_url:'https://avatars0.githubusercontent.com/u/28929274?v4',
            html_url:'http://github.com/rocketseat/rocketseat.com.br',
        });

        console.log(this.repositories);
    }
}

new App();