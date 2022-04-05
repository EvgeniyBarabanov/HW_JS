document.write("<h2>Задание1<h2>")

{
    let i = 1;
    while(i <= 50){
        document.write(i + " ");
        i++;
    }
}
document.write("<br>")
{
    for(let i = 35; i > 7; i--){
        document.write(i + " "); 
    }
}


document.write("<h2>Задание2<h2>")

{
    let i = 89;
    while(i > 10){
        document.write(i + "<br>");
        i--
    }
}


document.write("<h2>Задание3<h2>")

{
    let sum = 0;
    for(let i = 0; i <= 100; i++){
        sum += i;
    }
    document.write(" общая сумма чисел от 0 до 100 = " + sum)
}


document.write("<h2>Задание4<h2>")

{
    let  randomNumber = Math.round(Math.random()*(5-1)+1);
    let sum = 0;
    for(let i = 1; i <= randomNumber; i++){
        sum += i;   
    }
    document.write("сумма чисел от 1 до " + randomNumber + " = " + sum)
}


document.write("<h2>Задание5<h2>")

{   
    let i = 8;
    document.write("четные числа от 8 до 56 циклом while:<br>")
    while(i <= 56){
        document.write(i + " ");
        i = i + 2;
    }

    document.write("<br>четные числа от 8 до 56 циклом for:<br>")
    for(let i = 8; i <= 56; i = i + 2){
        document.write(i + " ");
    }
}


document.write("<h2>Задание6<h2>")

{
    for(let i = 2; i <= 10; i++){
        for(let j = 1; j <= 10; j++){
            let multiply = i * j;
            document.write(i + " * " + j + " = " + multiply + "<br>")
        }
    }
}


document.write("<h2>Задание7<h2>")

{
    let num = 0
    let result = 0;
    for(let n = 1000; n > 50;){
        n = n / 2;
        result = n;
        num++
    }
    document.write("результат деления равен: " + result + "<br>");
    document.write("количество итераций равно: " + num);
}


document.write("<h2>Задание8<h2>")

{
    let sum = 0;
    let amount = 0;
    for(let i = 0; i <= 0; i++){
        let num = prompt("Введите число");
        if(isNaN(num) == true){
            alert("ошибка ввода");
            i = -1;
        }else if((num != "0") && (num != "")){
            sum += parseInt(num);
            amount += 1;
            i = -1;
        }else{
            break;
        }
    }
    document.write("общая сумма = " + sum)
    let number = sum / amount;
    document.write("среднее арифметическое = " + number)
}


document.write("<h2>Задание9<h2>")

{
    let str = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57";
    let arr = str.split(" ");
    let max = Number(arr[0]);
    let min = Number(arr[0]);
    for(let i = 1; i < arr.length; i++){
        if(Number(arr[i]) < min){
            min = Number(arr[i])
        }
        if(Number(arr[i]) > max){
            max = Number(arr[i])
        }
    }
    document.write("Максимальное число строки:" + max + "<br>")
    document.write("Минимальное число строки:" + min)

}


document.write("<h2>Задание10<h2>")

{    
    let randomNumber = Math.round(Math.random()*(10000-1)+1);
    let str = String(randomNumber).split("");
    let sum = 0;
    for(let i = 0; i < str.length; i++){
        sum += Number(str[i]);
    }
    let reverse = str.reverse().join("");
    document.write("Вводим число:" + randomNumber + "<br>" + "цифр в числе: " + str.length + "<br>" + "сумма цифр: " + sum + "<br>" + " обратный порядок: " + reverse)

}