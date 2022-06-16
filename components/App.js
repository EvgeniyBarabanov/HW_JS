class App{
    #element;

    create(){
        let app = document.createElement('div');
        app.classList.add('app');
        this.#element = app;
    }

    render(){
        document.body.append(this.#element);
    }

    init(){
        this.create();
        this.render();
    }
}

export default new App().init();
