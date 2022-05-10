const gallery = function() {

    let elems = document.querySelectorAll('[data-gallery]');
   
    if(!elems || elems.length == 0) return;
    
    elems = Array.from(elems);
    
    const create = function(content, caption){
        let elem = document.querySelector('.gallery__content');
        
        if (elem) elem.remove();

        let elemContainer = document.querySelector('.gallery__container');

        let elemContent = document.createElement('div');
        elemContent.classList.add('gallery__content');
        elemContent.innerHTML = content;

        let elemClose = document.createElement('button');
        elemClose.classList.add('elem__close')
        elemClose.innerHTML = "+";
        elemClose.addEventListener('click', close);

        let elemCaption = document.createElement('p');
        elemCaption.classList.add('elem__caption');
        elemCaption.innerHTML = caption;

        elemContent.append(elemClose, elemCaption);
        elemContainer.append(elemContent);
    }

    const close = function(){
        let elem = document.querySelector('.gallery__content');
        
        if (elem) elem.remove();
    }

    const show = function(event){
        event.preventDefault();

        let elem = event.target;
        let dataset = elem.dataset.gallery;

        if(!dataset){
            const parent = elem.closest('[data-gallery]');

            if(!parent) return;


            elem = parent;
            dataset = parent.dataset.gallery;
        }
    
        let caption = elem.dataset.caption;

        const href = elem.href;

        let content = ' ';
        content = `<img src="${href}" alt="#">`
        if(!content) return;

        const galleryElem = create(content, caption);

        if(!galleryElem) return;

        document.body.append(galleryElem);
    }

    elems.forEach(function(elem){
        elem.addEventListener('click', show)
    });
};
