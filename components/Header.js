class Header{
    #element;

    create(){
        this.#element = document.createElement('header')
        this.#element.classList.add('app__headerBlock');
    };

    init(){
        this.create();

        return this.#element;
    };
};

const header = new Header().init();
export {header};