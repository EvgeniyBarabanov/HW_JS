class Page{
    #element;

    create(){
        this.#element = document.createElement('div')
        this.#element.classList.add('pageCart');

        let tableElem = document.createElement('table');
        tableElem.classList.add('table');

        let tableHeadElem = document.createElement('thead');
        let tableTrElem = document.createElement('tr');

        let tableThNameElem = document.createElement('th');
        tableThNameElem.innerHTML = "name";

        let tableThAmountElem = document.createElement('th');
        tableThAmountElem.innerHTML = "Amount";

        let tableThImageElem = document.createElement('th');
        tableThImageElem.innerHTML = "image";

        let tableThPriceElem = document.createElement('th');
        tableThPriceElem.innerHTML = "Price";

        let tableBodyElem = document.createElement('tbody');

        let tableFootElem = document.createElement('tfoot');


        let h2Elem = document.createElement('h2')
        h2Elem.innerHTML = "Cart";
        this.#element.append(h2Elem);
        
        let localData = localStorage.getItem('storage');
        localData = JSON.parse(localData);

        let summPrice = document.createElement('p');
        summPrice.innerHTML = 0;
        summPrice.classList.add('summPrice');


        let cookie = document.cookie.match(/\d+/g);

        localData.forEach(item =>{
            if (cookie.includes(String(item.id))){
                let productTrElem = document.createElement('tr');

                let productCategoryElem = document.createElement('td');
                productCategoryElem.innerHTML = item.category;

                let productPriceElem = document.createElement('td');
                productPriceElem.classList.add('main__price');
                productPriceElem.innerHTML = item.price;

                let productImageElem = document.createElement('td');
                let productImage = document.createElement('img');
                productImage.classList.add('main__image');
                productImage.setAttribute('src', item.image);
                productImageElem.append(productImage);

                let productAmountElem = document.createElement('td');

                let thing = document.createElement('p')
                thing.classList.add('thing')
                thing.innerHTML = 1;

                let btnPlus = document.createElement('button');
                let btnPlusImage = document.createElement('img');
                btnPlusImage.setAttribute('src', '/components/image/plus.png');
                btnPlus.addEventListener('click', ()=>{
                    productPriceElem.innerHTML = Math.round(Number(productPriceElem.innerHTML) + item.price)
                    this.totalPrice();
                    thing.innerHTML++;
                });
                btnPlus.classList.add('plus');

                let btnMinus = document.createElement('button');
                let btnMinusImage = document.createElement('img');
                btnMinusImage.setAttribute('src', '/components/image/minus.png');
                btnMinus.addEventListener('click', ()=>{
                    productPriceElem.innerHTML = Math.round(Number(productPriceElem.innerHTML) - item.price)
                    this.totalPrice();
                    thing.innerHTML--;
                    
                });
                btnMinus.classList.add('minus');
                
                btnPlus.append(btnPlusImage);
                btnMinus.append(btnMinusImage);
                productAmountElem.append(thing, btnMinus, btnPlus,)
                productTrElem.append(productCategoryElem,productImageElem, productAmountElem, productPriceElem,)
                tableBodyElem.append(productTrElem);
            }
        });

        tableTrElem.append(tableThNameElem,tableThImageElem, tableThAmountElem, tableThPriceElem);
        tableHeadElem.append(tableTrElem);
        tableFootElem.innerHTML = 'Total Price: ';
        tableFootElem.append(summPrice);
        tableElem.append(tableHeadElem, tableBodyElem,tableFootElem);

        this.#element.append(tableElem);
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