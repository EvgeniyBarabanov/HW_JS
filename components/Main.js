class Main{
    #element;

    create(){
        this.#element = document.createElement('main')
        this.#element.classList.add('app__mainBlock');
    };

    roating(){
        window.addEventListener('hashchange', ()=> {
            
            let hash = location.hash;
            hash = hash.slice(1);

            if(!hash || hash.length == 0) return;

            if((/Product\/\d+$/).test(hash)){
                import(`./pages/Product.js?key=${Date.now()}`)
                .then(module =>{
                    this.#element.innerHTML = '';
                    this.#element.append(module.default);
                })
            }else{
                import(`./pages/${hash}.js`)
                .then(module =>{
                    this.#element.innerHTML = '';
                    this.#element.append(module.default);
                })
            }
        })
    }

    init(){
        this.roating();
        this.create();

        return this.#element;
    };
};

const main = new Main().init();
export {main};



/* let testHash = hash.match(/[1-9]+$/);
            console.log(testHash[0]);

            console.log(/Product\/[1-9]+$/).test(hash); */