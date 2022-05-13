const filter = function(){
    let elems = document.querySelectorAll('[data-filter]');
    elems - Array.from(elems);
    const show = function(event){
        let elem = event.target;
        let dataset = elem.dataset.filter;
        let elemIMG = document.querySelectorAll('[data-content]');
        elemIMG = Array.from(elemIMG);
        elemIMG.forEach(function (item) {
            if (dataset != item.dataset.content && dataset != 'all'){
                item.style.display = "none";
            }else{
                item.style.display = "flex"; 
            };
        })
    }
    elems.forEach(function(item){
        item.addEventListener('click', show)
    })
}