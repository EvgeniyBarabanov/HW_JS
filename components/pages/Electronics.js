class Page{
    #element;

    create(){
        this.#element = document.createElement('div')
        this.#element.classList.add('page');

        let h2Elem = document.createElement('h2')
        h2Elem.innerHTML = "Electronics"

        let productUlElem = document.createElement('ul');

        let localData = localStorage.getItem('storage');
        localData = JSON.parse(localData);
        localData.forEach(item => {
            if(item.category == "electronics"){
                let liElem = document.createElement('li');
                liElem.innerHTML = `
                        <a class="main__product" href="#Product/${item.id}">
                            <p class="main__title">${item.title}</p>
                            <img class="main__image" src="${item.image}">
                            <p class="main__description">${item.description}</p>
                            <p class="main__price">${item.price}$</p>
                        </a>`;
                    productUlElem.append(liElem);
            }
        });
        this.#element.append(h2Elem, productUlElem);
    };

    init(){
        this.create();

        return this.#element;
    };
};

export default new Page().init();
