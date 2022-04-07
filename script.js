/* document.write("<h2>Задание1</h2>");

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
result(func4(prompt("Введите диапазон"), prompt("Введите диапазон"))); */


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
    for(let i = 0; i < arr.length;i++){
        if(isEven(arr[i]) == true){
            newArr.push(arr[i])
        }
        return newArr;
    }   
}

console.log((func6([1,2,3,4,5,6,7,8,9,10])));