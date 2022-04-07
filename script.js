document.write("<h2>Задание1</h2>")

{
    let arr = [1,2,3,4,5];
    for(let i = 0; i < arr.length;i++){
        document.write(arr[i])
    }
}


document.write("<h2>Задание2</h2>")

{
    let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
    for(let i = 0; i < arr.length;i++){
        if(arr[i] > -10 && arr[i] < -3){
         document.write(arr[i] + ' ');
        }
    }
}


document.write("<h2>Задание3</h2>")

{
    document.write("цикл for: ")
    let arr = [];
    for(let i = 23; i <= 57; i++){
        arr.push(i);
    }
    let result = 0;
    for(let i = 0; i < arr.length;i++){
        result+=arr[i]
    }
    document.write(arr + "<br> Сумма элементов маccива = " + result)

    document.write("<br> цикл while: ")
    let arr1 = [];
    let i = 23;
    while(i <= 57){
        arr1.push(i)
        i++;
    }
    document.write(arr1)
}


document.write("<h2>Задание4</h2>")

{
    let arr = ["10", "20", "30", "50", "235", "3000"]
    document.write("Числа, начинающиеся на 1,2,5 = <br>")
    for(let i = 0; i < arr.length;i++){
        if((arr[i][0] == 1) || (arr[i][0] == 2) || (arr[i][0] == 5)){
            document.write(arr[i] + "<br>")
        }
    }
}


document.write("<h2>Задание5</h2>")

{
    let arr = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]
    for(let i = 0; i < arr.length; i++){
        if((arr[i] == "СБ") || (arr[i] == "ВС")){
            document.write("<strong>" + arr[i] + "</strong> ")
        }else{
            document.write(arr[i] + " ")
        }
    }
}


document.write("<h2>Задание6</h2>")

{
    let arr = [1, 2, "три", ["четыре", 5], 6]
    arr.push(76)
    document.write("Последний элемент массива: " +  arr.length)
}


document.write("<h2>Задание7</h2>")

{
    let arr = [];
    for(let i = 0; i <= 0; i++){
        let num = Number(prompt("Введите число"));
        i--;
        if( num == ""){
            break;
        }else{
            arr.push(num);
        }
    }
    document.write("Полученный массив: " + arr + "<br>")
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j+1] = temp;
            }
        }
    }
    document.write("Отсортированный массив: " + arr)
}


document.write("<h2>Задание8</h2>")

{
    let arr = [12, false, "Текст", 4, 2, -5, 0];
    let arrReverse = arr.reverse();
    document.write("Перевернутый массив: ");
    let i = 0;
    while(arrReverse.length > i){
        document.write("<br>" + arrReverse[i]);
        i++;
    }
}


document.write("<h2>Задание9</h2>")

{
    let arr = [5,9,21,,,9,78,,,,6];
    let number = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == undefined){
            number++
        }
    }
    document.write("Количество пустых элементов в массиве: " + number)
}


document.write("<h2>Задание10</h2>")

{
    let arr = [48,9,0,4,21,2,1,8,0,84,0,76,8,4,0,13,2];
    let sum = 0;
    for(let i = arr.indexOf(0); i < arr.lastIndexOf(0); i++){
        sum+= arr[i];
    }
    document.write("сумма элементов массива между первы и последним 0 = " + sum);
}


document.write("<h2>Задание11</h2>")

{
    let h = 5;
    for(let i = 1; i <= h; i++){
        let str = "";
        for(j = 0; j < i * 2 - 1; j++){
            str+= "*";
        }
        console.log(str);
        str = "";
    }
}