class Nav{
    #element;

    create(){
        this.#element = document.createElement('nav')
        this.#element.classList.add('app__navBlock');
        this.#element.innerHTML = `
            <ul>
                <li><a href='/'>HOME</a></li>
                <li>CATEGORIES
                    <ul>
                        <li><a href='/#MensClothing'>Men's clothing</a></li>
                        <li><a href='/#Jewelery'>Jewelery</a></li>
                        <li><a href='/#Electronics'>Electronics</a></li>
                        <li><a href='/#WomensClothing'>Women's clothing</a></li>
                    </ul>
                </li>
                <li><a href='/#Cart' class='app__navBlock_cart'>CART</a></li>
            </ul>`                  
    };

    init(){
        this.create();

        return this.#element;
    };
};

const nav = new Nav().init();
export {nav};

