class Page{
    #element;
    create(){
        this.#element = document.createElement('div')
        this.#element.classList.add('page');

        let localData = localStorage.getItem('storage');
        localData = JSON.parse(localData);

        let hash = location.hash.match(/\d+$/);

        let productElem = localData[hash[0]-1];

        this.#element.innerHTML = `
            <div>
                <img class="main__image" src = ${productElem.image}>
                <p class="main__category" >${productElem.description}</p>
                <p class="main__price">${productElem.price}</p>
            </div>`;
        let productAdd = document.createElement('button');
        productAdd.innerHTML = "добавить товар в корзину"
        productAdd.addEventListener('click', function(){

        if(document.cookie != ''){
            let cookies = document.cookie;
            console.log(cookies);
            const cookieReg = new RegExp('id=(.*);?');
            cookies = cookies.match(cookieReg)[1];
            cookies += `,${productElem.id}`;
            document.cookie = `id=${cookies}`

        }else {
            document.cookie = `id=${productElem.id}`;
        }
           
        })
        productAdd.classList.add('main__product_productElemCart');
        this.#element.append(productAdd)

    };

    /* onAdd(){
        console.log('я работаю');
        this.innerHTML = "Добавлено"
        document.cookie = э
    } */

    init(){
        this.create();

        return this.#element;
    };
};

export default new Page().init();
