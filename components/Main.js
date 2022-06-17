class Main{
    #element;

    create(){
        this.#element = document.createElement('main')
        this.#element.classList.add('app__mainBlock');
    };

    init(){
        this.create();

        return this.#element;
    };
};

const main = new Main().init();
export {main};