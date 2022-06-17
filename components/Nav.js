class Nav{
    #element;

    create(){
        this.#element = document.createElement('nav')
        this.#element.classList.add('app__navBlock');
    };

    init(){
        this.create();

        return this.#element;
    };
};

const nav = new Nav().init();
export {nav};