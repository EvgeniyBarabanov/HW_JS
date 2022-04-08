document.write("<h2>Задание1</h2>");

function func1(num1,num2,num3){
    document.write((num1 - num2)/num3);
}
func1(21,10,2);



document.write("<h2>Задание2</h2>");

function func2(num){
    document.write(Math.pow(num,2) + "<br>")
    document.write(Math.pow(num,3))
}
func2(5);



document.write("<h2>Задание3</h2>");

function Max(a,b){
    if(a > b){
        return(a);
    }else if(a < b){
        return(b)
    }
}
document.write("Большее число" + Max(10, 11) + "<br>");

function Min(a,b){
    if(a > b){
        return(b);
    }else if(a < b){
        return(a)
    }
}
document.write("Меньшее число" + Min(29, 28));



document.write("<h2>Задание4</h2>");

function func4(a,b){
    let arr = [];
    for(let i = a; i <= b; i++){
        arr.push(i)
    }
    return arr;
}

function result(arr) {
    document.write(arr)
}
result(func4(prompt("Введите диапазон"), prompt("Введите диапазон")));



document.write("<h2>Задание5</h2>");

function isEven(num) {
    if(num %2 == 0){
        return true;
    }else{
        return false;
    }
}



document.write("<h2>Задание6</h2>");

function func6(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(isEven(arr[i]) == true){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

document.write("Массив четных чисел: " + (func6([1,2,3,4,5,6,7,8,9,10])));



document.write("<h2>Задание7</h2>")

function func7(num) {
    let str = "";
    for(let i = 1; i <= num; i++){
        for(let j = 1; j <=i; j++){
            str+= i;
        }
        document.write(str + "<br>");
        str = "";
    }
}

func7(9);



document.write("<h2>Задание8</h2>")

function func8(row){
    let str = "";
        for(let i = 1; i <= row; i++){
            for(let j = row; j > i; j--){
                str+= " ";
            }
            for(let k = 1; k <= i*2-1; k++){
                str+= "*";
            }
            console.log(str);
            str = "";
        }
}

func8(row = prompt("Введите количество рядов"));



document.write("<h2>Задание9</h2>")

function func9() {
    let arr = [];
    let firstNum = 0;
    let secondNum = 1;
    let end = 1000;
    for(let i = 0; secondNum <= end; i++){
        arr[i] = firstNum;
        arr[i+1] = secondNum;
        firstNum = arr[i+1];
        secondNum = arr[i] + arr[i+1];
    }
    return(arr);
}
document.write("Числа Фибоначи от 0 до 1000: " + func9() + ".");



document.write("<h2>Задание10</h2>")

function func10(num) {
    let sum = 0;
    let str = String(num).split("");
    for(let i = 0; i < str.length; i++){
        sum += +str[i];
    }
    console.log("сумма введенного числа = " + sum);
    if(sum >= 10){
        func10(sum);
    }
}
func10(45258989);



document.write("<h2>Задание11</h2>")

let i = 0;
function func11(arr) {
    document.write(arr[i])
    i++;
    if(i < arr.length){
        func11(arr)
    }
}
func11([12345678]);



document.write("<h2>Задание12</h2>")

function func12(){
    let name1 = prompt("Введите фамилию");
    let name2 = prompt("Введите имя");
    let name3 = prompt("Введите Отчество");
    let group = prompt("Введите номер группы");
    let str1 = "Домашняя работа: 'Функции'";
    let str2 = ("Выполнил: студент гр. " + group);
    let str3 = (name1 + " " + name2 + " " + name3);

    let maxArr = [str1.split("").length, str2.split("").length, str3.split("").length]
    let maxLength = maxArr[0]; 
    for(let i = 1; i <= maxArr.length; i++){ //Максимальная длинна строки
        if(maxArr[i] > maxLength){
            maxLength = maxArr[i];
        }
    }

    let emptyStr = "*";
    for(let i = 0; i < maxLength; i++){
        emptyStr+= "*";
    }
    emptyStr+= "*";
    console.log(emptyStr);
    emptyStr = "*";

    for(let j = 0; j < maxLength; j++){
        if(str1.split("")[j] == undefined){
            emptyStr+= " ";
        }else{
        emptyStr+= str1.split("")[j];
        }
    }
    emptyStr+= "*";
    console.log(emptyStr);
    emptyStr = "*";
    
    for(let j = 0; j < maxLength; j++){
        if(str2.split("")[j] == undefined){
            emptyStr+= " ";
        }else{
        emptyStr+= str2.split("")[j];
        }
    }
    emptyStr+= "*";
    console.log(emptyStr);
    emptyStr = "*";

    for(let j = 0; j < maxLength; j++){
        if(str3.split("")[j] == undefined){
            emptyStr+= " ";
        }else{
        emptyStr+= str3.split("")[j];
        }
    }
    emptyStr+= "*";
    console.log(emptyStr);
    emptyStr = "*";

    for(let i = 0; i < maxLength; i++){
        emptyStr+= "*";
    }
    emptyStr+= "*";
    console.log(emptyStr);
}
func12();


document.write("<h2>Задание13</h2>")

