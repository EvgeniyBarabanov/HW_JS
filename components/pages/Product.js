class Page{
    #element;

    create(){
        this.#element = document.createElement('div')
        this.#element.classList.add('page');

        let localData = localStorage.getItem('storage');
        localData = JSON.parse(localData);

        let hash = location.hash.match(/\d+$/);

        let productElem = localData[hash[0]-1];

        let amountProduct = 0;

        this.#element.innerHTML = `
            <div>
                <img class="main__image" src = ${productElem.image}>
                <p class="main__category" >${productElem.description}</p>
                <p class="main__price">${productElem.price}</p>
                <button onclick="onAdd" class="main__product_productElemCart">Добавить в корзину</button>
            </div>`;


    };

    onAdd(){
            console.log('ad');
    }

    init(){
        this.create();

        return this.#element;
    };
};

export default new Page().init();
