class Footer{
    #element;

    create(){
        this.#element = document.createElement('footer')
        this.#element.classList.add('app__footerBlock');
    };

    init(){
        this.create();

        return this.#element;
    };
};

const footer = new Footer().init();
export {footer};