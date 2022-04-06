/* document.write("<h2>Задание1</h2>")

{
    let arr = [1,2,3,4,5];
    for(let i = 0; i < arr.length;i++){
        document.write(arr[i])
    }
} */


/* document.write("<h2>Задание2</h2>")

{
    let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
    for(let i = 0; i < arr.length;i++){
        if(arr[i] > -10 && arr[i] < -3){
         document.write(arr[i] + ' ');
        }
    }
} */


/* document.write("<h2>Задание3</h2>")

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
} */


/* document.write("<h2>Задание4</h2>")

{
    let arr = ["10", "20", "30", "50", "235", "3000"]
    document.write("Числа, начинающиеся на 1,2,5 = <br>")
    for(let i = 0; i < arr.length;i++){
        if((arr[i][0] == 1) || (arr[i][0] == 2) || (arr[i][0] == 5)){
            document.write(arr[i] + "<br>")
        }
    }
} */


/* document.write("<h2>Задание5</h2>")

{
    let arr = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]
    for(let i = 0; i < arr.length; i++){
        if((arr[i] == "СБ") || (arr[i] == "ВС")){
            document.write("<strong>" + arr[i] + "</strong> ")
        }else{
            document.write(arr[i] + " ")
        }
    }
} */


document.write("<h2>Задание6</h2>")

{
    
}