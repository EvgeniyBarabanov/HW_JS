/*1. Дана строка 'aaa@bbb@ccc'. Замените все @ на  ! с помощью глобального поиска и замены.*/
{
    let str = 'aaa@bbb@ccc'
    console.log(str.replace(/@/g, '!'));
}


/*2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025.*/
{
    let date = "2025-12-31";
    console.log(date.split("-").reverse().join("/"));
}

/*3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово «javascript» тремя разными способами (через substr, substring, slice).*/
{
    let str = "Я учу javascript";
    console.log(str.substr(2,5) + str.substr(7));
    console.log(str.substring(2,5) + str.substring(5));
    console.log(str.slice(2,5) + str.slice(5));
}


/*4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.*/
{
    let arr = [4,2,5,19,13,0,10];
    let sum = 0;
    for(let i = 0; i < arr.length;i++){
        sum+= Math.pow(arr[i], 3);
    }
    console.log(Math.sqrt(sum));
}


/* 5. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.*/
{
    let a = 3,
        b = 5,
        c = a - b;
    if(c < 0){
        console.log(Math.abs(c));
    } else{
        console.log(c);
    }
}


/* 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).*/
{
    let date = new Date();
    function func6(num){
        if (num < 10){
            return "0" + num;
        }else{
            return num;
        }
    }
    console.log(func6(date.getHours()) + ":" + func6(date.getMinutes()) + ":" +  func6(date.getSeconds()) + " " + func6(date.getDate()) + "." + func6(date.getMonth() + 1) + "." + date.getFullYear());
}


/* 7. Дана  строка 'aa aba abba abbba abca abea'.  Напишите  регулярку,  которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.*/
{
    let str = "aa aba abba abbba abca abea";
    console.log(str.match(/ab+a/g));
}


/* 8. Напишите ф-цию строгой проверки ввода номер телефона в международном формате (<код страны> <код города или сети> <номер телефона>). Функция должна возвращать true или false. Используйте регулярные выражения.*/
//+375xx xxxxxxx
//+375 (xx) xxx-xx-xx
//+375 xx xxx xx xx
//+375 (xx) xxx xx xx
{
    function func8(str){
        if (/^\+?375\s?\(?(33|29|44|25)\)?\s?(\d){3}\-?(\d){2}\-?(\d){2}$/.test(str)){
            return true;
        }else{
            return false;
        }
    }
    console.log(func8("375 (44) 710-42-23"));
}
//+ --- 1 и более
//? --- 0 или 1
//* --- 0 и более


/* 9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих условия:
- весь адрес не должен содержать русские буквы и спецсимволы, кроме одной «собачки», знака подчеркивания, дефиса и точки;
- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем имя может содержать только буквы, цифры, но не быть первыми и единственными в имени;
- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)не может быть длиной менее 2 и более 11 символов. */
{
    function func9(email) {
        if(/^\w+[\._-\d+]?\w+[\._-\d+]?\w*\@g?mail\.(\w){2,11}$/i.test(email)){
            return true;
        }else{
            return false;
        }

    }
    console.log(func9("evgeniy.barabanov96@mail.ru"));
}


/* 10. Напишите ф-цию, которая из полного адреса с параметрами и без, например: https://tech.onliner.by/2018/04/26/smart-do-200/? utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес доменного имени (https://tech.onliner.by), остальную часть адреса без параметров (/2018/04/26/smart-do-200/), параметры (utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе может и не быть каких-либо составляющих. Ф-ция должна возвращать массив.*/
{
    function func10(url) {
        return url.match(/(https?\:\/\/[\w\d]+\.?[\w\d?]+\.\w{2,3})(\/[\d\w\/\-\_]+)?(\?[\w\d\_\-\=\&]+)?(\#[\w\d\_\-\=]+)?/)
    }
    console.log(func10("https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3"));
    console.log(func10("https://www.youtube.com/watch?v=EmAO8f_l-F4"));
}



//ClassWork8. Напишите функцию numProducts(num),  которая в зависимости от переданного в нее целочисленного аргумента num, будет выводить слово «товар» в нужной форме («12 товаров», но «22 товара»). По умолчанию аргумент num должен иметь значение 0.
{
function numProducts(num) {    
    let arr = ['0','1','2','3','4','5','6','7','8','9']
    b = num.split('').reverse();  
    if (b[0] == "0"){
        return num + " товаров";
    }else if((b[0] == "1") && b[1] != '1'){
        return num + " товар";
    }else if((b[0] == '2' || b[0] == '3' || b[0] == '4') && (b[1] == "0" || b[1] == undefined || b[1] != "1")){
        return num + " товара";
    }else if(b[0] == '0' && arr.includes(b[1])){
        return num + " товаров";
    }else if((b[0] == "5" || b[0] == "6" || b[0] == "7" || b[0] == "8" || b[0] == "9") && (b[1] == undefined || b[1] != "1")){
        return num + " товаров";
    }else if (b[1] == "1"){
        return num + " товаров";
    }
}
console.log(numProducts("0"));
console.log(numProducts("3"));
console.log(numProducts("11"));
console.log(numProducts("122"))
console.log(numProducts("956"));
}