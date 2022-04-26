function toDoList(){
    let head = document.head;
    let style = document.createElement('style');
    head.append(style);
    style.innerHTML = `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .app{
        width: 250px;
        margin: 20px auto;
        position: relative;
    }
    .title{
        display:block;
        text-align: center;
        background-color: blue;
        color: white;
        padding: 5px;
        font-family:Arial;
        font-weight:bold;
    }
    .input{
        width: 100%;
        padding: 2%;
        border: 0;
        border-radius: 4px;
        box-shadow: 0px 5px 10px black;
        line-height: 20px;
        font-size: 20px;
        margin-bottom: 10px;
    }
    .paragraph{
        margin-left: 10px;
        font-size: 25px;
        cursor: pointer;
    }
    .btn{
        border: 0;
        position: absolute;
        top: 0;
        right: 0;
        padding: 5px;
        color: white;
        font-family:Arial;
        font-weight:bold;
        background-color: blue;
        cursor:pointer;
        display: none;
    }`;
    let body = document.body;
    let app = document.createElement('div');
    body.append(app);
    app.setAttribute('class', 'app');

    let titleElem = document.createElement('span');
    titleElem.setAttribute('class','title');
    titleElem.innerHTML = "To Do List";

    let btnElem = document.createElement('button');
    btnElem.setAttribute('class', 'btn');
    btnElem.innerHTML = 'Clear';
    btnElem.addEventListener('click', function(){
        while(divTask.firstChild){
            divTask.removeChild(divTask.firstChild)
        }
        btnElem.style.display = "none";
    })


    let inputElem = document.createElement('input');
    inputElem.setAttribute('class','input');
    inputElem.setAttribute('placeholder','Type your task...');

    let divTask = document.createElement('div');

    app.append(titleElem, inputElem, btnElem, divTask);

    inputElem.addEventListener('change', function addTask() {
        let checkElem = document.createElement('input');
        checkElem.setAttribute('type', 'checkbox');
        checkElem.addEventListener('click', function () {
            if (checkElem.checked){
                checkElem.nextElementSibling.style.textDecoration = "line-through";
            }else{
                checkElem.nextElementSibling.style.textDecoration = "none";
            }
        })
        let task = document.createElement('span');
        task.setAttribute('class', 'paragraph');
        task.addEventListener('click', function () {
            this.innerHTML = prompt();
        })
        task.innerHTML = this.value;

        let hr = document.createElement('hr');
        divTask.append(checkElem, task, hr);
        this.value = "";
        btnElem.style.display = "inline";
    })
}
toDoList();


