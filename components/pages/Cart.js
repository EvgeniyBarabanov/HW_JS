class Page{
    #element;

    create(){
        this.#element = document.createElement('div')
        this.#element.classList.add('page');
        
        let h2Elem = document.createElement('h2')
        h2Elem.innerHTML = "Cart";
        this.#element.append(h2Elem);
    };

    init(){
        this.create();

        return this.#element;
    };
};

export default new Page().init();