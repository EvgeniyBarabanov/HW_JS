import {header} from './Header.js';
import {nav} from './Nav.js';
import {main} from './Main.js';
import {footer} from './Footer.js';

class App{
    #element;

    create(){
        let app = document.createElement('div');
        app.classList.add('app');
        this.#element = app;
    }

    render(){
        let body = document.body;
        body.append(this.#element);
        
        this.#element.append(header, nav, main, footer)
    }

    update(){
        let localElem = localStorage.getItem('storage');
        localElem = JSON.parse(localElem);
        console.log(localElem);
        localElem.forEach(item => {
            let productUl = document.createElement('ul');
            productUl.classList.add('main__prodect');

            let productUlCategoru = document.createElement('p');
            productUlCategoru.innerHTML = item.category;

            let productUlImage = document.createElement('img');
            productUlImage.setAttribute('src', item.image);

            let productUlDescription = document.createElement('p');
            productUlDescription.innerHTML = item.description;

            let productUlPrice = document.createElement('p');
            productUlPrice.innerHTML = item.price;

            main.append(productUlCategoru, productUlImage/* , productUlDescription */, productUlPrice)
        });
    }

    async getData(){
        if (localStorage.length > 0 || localStorage == '[]'){
            return;
        } else{
        await fetch('https://fakestoreapi.com/products')
            .then(response=>response.json())
            .then(dataJSON=> localStorage.setItem('storage', JSON.stringify(dataJSON)))
        }
    }

    init(){
        const htmlElem = document.querySelector('html');
        htmlElem.setAttribute('lang','en');

        const metaCharsetElem = document.createElement('meta');
        metaCharsetElem.setAttribute('charset','UTF-8');

        const metaHttpElem = document.createElement('meta');
        metaHttpElem.setAttribute('http-equiv','X-UA-Compatible');
        metaHttpElem.setAttribute('content','IE=edge');

        const metaNameElem = document.createElement('meta');
        metaNameElem.setAttribute('name','viewport');
        metaNameElem.setAttribute('content','width=device-width, initial-scale=1.0');

        const titleElem = document.createElement('title');
        titleElem.innerHTML = "HW14JS";

        const cssElem = document.createElement('link');
        cssElem.setAttribute('rel','stylesheet');
        cssElem.setAttribute('href','css/style.css');

        const headElem = document.querySelector('head');
        headElem.append(metaCharsetElem, metaHttpElem, metaNameElem,cssElem, titleElem)

        this.getData().then(() => {
            this.create();
            this.render();
            this.update();
        })
    }
}

export default new App().init();
