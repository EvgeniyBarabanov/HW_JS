class Header{
    #element;

    create(){
        this.#element = document.createElement('header')
        this.#element.classList.add('app__headerBlock');
        this.#element.innerHTML = `
            
            <div>
                <p>+375447104223</p>
                <p>some@mail.ru</p>
            </div>`
    };

    init(){
        this.create();
        return this.#element;
    };
};

const header = new Header().init();
export {header};