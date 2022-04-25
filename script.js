console.log(window.document);

let body = document.body;

let htmlElem = document.querySelector('html');
htmlElem.setAttribute('lang','en');

let headElem = document.querySelector('head');

let metaElem1 = document.createElement('meta');
metaElem1.setAttribute('charset', 'UTF-8');

let metaElem2 = document.createElement('meta');
metaElem2.setAttribute('http-equiv', 'X-UA-Compatible');
metaElem2.setAttribute('content', 'IE=edge');

let metaElem3 = document.createElement('meta');
metaElem3.setAttribute('name', 'viewport');
metaElem3.setAttribute('content', 'width=device-width, initial-scale=1.0');

let titleElem = document.createElement('title');
titleElem.innerHTML = "widget";

let styleElem = document.createElement('style');
styleElem.innerText = `
@import url('https://fonts.googleapis.com/css2?family=Arvo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.options{
    display: flex;
    flex-direction:column;
    text-align:center;
    margin-top:60px;
}
.options__header{
    margin-bottom:60px;
}
.options__header h2{
    font-size:36px;
    font-family: 'Arvo', serif;
    line-height: 48px;
    margin-bottom: 20px;
}
.options__header span{
    font-family: 'Open Sans', sans-serif;
    color: #9FA3A7;
    font-size: 14px;
    line-height: 26px;
}
.options__choise{
    overflow: hidden;
    display: flex;
    margin: 0 auto;
    width: 800px;
    border-radius: 10px;
    height: 380px;
}
.options__choiseItem{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 400px;
    justify-content:center
}
.options__choiseItem:hover{
    background-color: #8F75BE;
}

.options__choiseItem .name {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2.5px;
    color: #9FA3A7;
    margin-bottom: 30px;
}
.options__choiseItem:hover .name{
    color: #FFC80A;
}
.options__choiseItem .description{
    font-family: 'Arvo', serif;
    font-size:36px;
    line-height:46px;
    width: 60%;
    margin-bottom: 35px;
}
.options__choiseItem:hover .description,
.options__choiseItem:hover .postscript{
    color: #FFF;
}
.options__choiseItem .postscript{
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    line-height: 22px;
    width: 60%;
    color: #9FA3A7;
    margin-bottom: 65px;
}
.options__choiseItem .btn{
    border: 3px solid #FFC80A;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2.5px;
    font-weight: bold;
    padding: 20px 25px;
    border-radius: 30px;
    cursor:pointer;
}
.options__choiseItem:hover .btn{
    background-color: #8F75BE;
    color: #fff;
}`

headElem.append(metaElem1, metaElem2, metaElem3, titleElem, styleElem);



let divOptions = document.createElement('div');
divOptions.setAttribute('class','options')

let divOptionsHeader = document.createElement('div')
divOptionsHeader.setAttribute('class', 'options__header')

let h2Elem = document.createElement('h2');
h2Elem.innerHTML = "Choose Your Option";

let captionElem = document.createElement('span')
captionElem.innerHTML = "But I must explain to you how all this mistaken idea of denouncing";

divOptionsHeader.append(h2Elem,captionElem)

let choisesContainer = document.createElement('div');
choisesContainer.setAttribute('class','options__choise')

let choisesContainerOption1 = document.createElement('div')
choisesContainerOption1.setAttribute('class', 'options__choiseItem')

let spanName1 = document.createElement("span");
spanName1.setAttribute('class','name')
spanName1.innerHTML = "FREELANCER";

let pDescription1 = document.createElement("p");
pDescription1.setAttribute('class', 'description');
pDescription1.innerHTML = "Initially designed to";

let pPostcript1 = document.createElement("p");
pPostcript1.setAttribute('class', 'postscript');
pPostcript1.innerHTML = "But I must explain to you how all this mistaken idea of denouncing";

let button1 = document.createElement('button');
button1.setAttribute('class', 'btn');
button1.innerHTML = "START HERE";



let choisesContainerOption2 = document.createElement('div')
choisesContainerOption2.setAttribute('class', 'options__choiseItem')

let spanName2 = document.createElement("span")
spanName2.setAttribute('class','name')
spanName2.innerHTML = "STUDIO";

let pDescription2 = document.createElement("p")
pDescription2.setAttribute('class', 'description');
pDescription2.innerHTML = "Initially designed to";

let pPostcript2 = document.createElement("p");
pPostcript2.setAttribute('class', 'postscript');
pPostcript2.innerHTML = "But I must explain to you how all this mistaken idea of denouncing";

let button2 = document.createElement('button');
button2.setAttribute('class', 'btn');
button2.innerHTML = "START HERE";

choisesContainerOption1.append(spanName1, pDescription1, pPostcript1, button1)
choisesContainerOption2.append(spanName2, pDescription2, pPostcript2, button2)
choisesContainer.append(choisesContainerOption1, choisesContainerOption2);
divOptions.append(divOptionsHeader, choisesContainer);
body.append(divOptions)