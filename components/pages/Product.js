class Page{
    #element;
    create(){
        this.#element = document.createElement('div')
        this.#element.classList.add('productPage');

        let localData = localStorage.getItem('storage');
        localData = JSON.parse(localData);

        let hash = location.hash.match(/\d+$/);

        let productElem = localData[hash[0]-1];

        this.#element.innerHTML = `
            <p class="main__title">${productElem.title}</p>
            <img class="main__image" src = ${productElem.image}>
            <p class="main__description" >${productElem.description}</p>
            <p class="main__price">${productElem.price}$</p>
        `;
            
        let productAdd = document.createElement('button');
        let addCartIcon = document.createElement('img');
        
        addCartIcon.setAttribute('src','/components/image/addToCart.png');
        if(document.cookie.length != 0){
            if(document.cookie.match((/(\d+)/g)).includes(String(productElem.id))){
                addCartIcon.setAttribute('src','/components/image/addedToCart.png');
            };
        };

        productAdd.addEventListener('click', function(){
            addCartIcon.setAttribute('src','/components/image/addedToCart.png');
            if(document.cookie != ''){
                let cookies = document.cookie;
                const cookieReg = new RegExp('id=(.*);?');
                cookies = cookies.match(cookieReg)[1];
                if (!cookies.split(',').includes(String(productElem.id))){
                    cookies += `,${productElem.id}`;
                    document.cookie = `id=${cookies}; max-age=` + 20;
                    document.querySelector('.app__navBlock_sum').innerHTML = document.cookie.match(/\d+/g).length
                }
            }else {
                document.cookie = `id=${productElem.id}; max-age=` + 20;
                document.querySelector('.app__navBlock_sum').innerHTML = document.cookie.match(/\d+/g).length
            }
        });
        productAdd.classList.add('main__product_productElemCart');
        productAdd.append(addCartIcon);
        this.#element.append(productAdd);
    };

   

    init(){
        this.create();

        return this.#element;
    };
};

export default new Page().init();
