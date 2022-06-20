class Nav{
    #element;

    create(){
        this.#element = document.createElement('nav')
        this.#element.classList.add('app__navBlock');
        this.#element.innerHTML = `
            <ul>
                <li>HOME</li>
                <li>CATEGORIES
                    <ul>
                        <li>Men's clothing</li>
                        <li>Jewelery</li>
                        <li>Electronics</li>
                        <li>women's clothing</li>
                    </ul>
                </li>
                <li><button class = 'app__navBlock__btn'><img src = '/components/image/btnBasket.png'></button></li>
            </ul>`                  
    };

    init(){
        this.create();

        return this.#element;
    };
};

const nav = new Nav().init();
export {nav};