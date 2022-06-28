class Page{
    #element;

    create(){
        this.#element = document.createElement('div')
        this.#element.classList.add('pageCart');
        
        let h2Elem = document.createElement('h2')
        h2Elem.innerHTML = "Cart";
        this.#element.append(h2Elem);
        
        let productUlElem = document.createElement('ul');
        let localData = localStorage.getItem('storage');
        localData = JSON.parse(localData);

        let summPrice = document.createElement('p');
        summPrice.innerHTML = 0;
        summPrice.classList.add('summPrice');


        let cookie = document.cookie.match(/\d+/g);

        localData.forEach(item =>{
            if (cookie.includes(String(item.id))){
                let productLiElem = document.createElement('li');
                
                let productImg = document.createElement('img');
                productImg.classList.add('main__image');
                productImg.setAttribute('src', item.image);

                let productPrice = document.createElement('p');
                productPrice.classList.add('main__price');
                productPrice.innerHTML = item.price;

                let thing = document.createElement('p')
                thing.classList.add('thing')
                thing.innerHTML = 1;

                let btnPlus = document.createElement('button');
                btnPlus.addEventListener('click', ()=>{
                    productPrice.innerHTML = Math.round(Number(productPrice.innerHTML) + item.price)
                    this.totalPrice();
                    thing.innerHTML++;
                });
                btnPlus.classList.add('plus');
                btnPlus.innerHTML = "плюс"

                let btnMinus = document.createElement('button');
                btnMinus.addEventListener('click', ()=>{
                    productPrice.innerHTML = Math.round(Number(productPrice.innerHTML) - item.price)
                    this.totalPrice();
                    thing.innerHTML-- +'шт';
                });
                btnMinus.classList.add('minus');
                btnMinus.innerHTML = "минус"

                productLiElem.append(productImg, productPrice, btnPlus, btnMinus, thing);
                productUlElem.append(productLiElem);
            }
        })
        this.#element.append(productUlElem, summPrice);
        this.totalPrice();
    };

    totalPrice(){
        let testPrice = this.#element.querySelectorAll('.main__price');
        let summ = this.#element.querySelector('.summPrice')
        summ.innerHTML = 0;
        testPrice.forEach(item =>{
            summ.innerHTML = Number(summ.innerHTML) + Number(item.innerHTML);
        })
        
    }

    init(){
        this.create();

        return this.#element;
    };
};

export default new Page().init();