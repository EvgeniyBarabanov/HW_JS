class Footer{
    #element;

    create(){
        this.#element = document.createElement('footer')
        this.#element.classList.add('app__footerBlock');
        this.#element.innerHTML = `
            <div>
                <ul class="app__footerBlock_link">
                    <li><a href="#"><img src="/components/image/fb.png"></a></li>
                    <li><a href="#"><img src="/components/image/in.png"></a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a href="#"><img src="/components/image/paypal.png"></a></li>        
                    <li><a href="#"><img src="/components/image/visa.png"></a></li>                    
                    <li><a href="#"><img src="/components/image/master-card.png"></a></li>                        
                    <li><a href="#"><img src="/components/image/american-express.png"></a></li>        
                    <li><a href="#"><img src="/components/image/discover.png"></a></li>        
                </ul>
            </div>
            <div>
               <p>Copyright © 2020 Shop Pty. Ltd.</p>
            <div>`
    };

    init(){
        this.create();

        return this.#element;
    };
};

const footer = new Footer().init();
export {footer};