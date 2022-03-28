document.write("<h2>Задание 1.</h2>");

{
    let name = prompt("Как вас зовут");
    let age = prompt("Возраст");
    let city = prompt("Город проживания");
    let company = prompt("Место работы");
    let phone = prompt("Телефон");
    let email = prompt("Почта");
    document.write("Меня зовут " + name + ". Мне " + age + " лет. Я проживаю в городе " + city + " и работаю в компании " + company + ". Мои контактные данные: телефон " + phone + ", почта " + email + "."  );



    document.write("<h2>Задание 2.</h2>");


    let year = 2022 - age;
    document.write(name + " родился в " + year + " году."); 
}


document.write("<h2>Задание 3.</h2>");

{
    let string = "124322";
    let sum = 0;
    let sum2 = 0;

    for(let i = 0; i < string.length; i++){
        if( i <= 2){
            sum += Number(string[i]);
        } else{
            sum2 += Number(string[i]);
        }
    }

    if( sum == sum2 ){
        document.write("да")
    } else{
        document.write("нет")
    }
}



document.write("<h2>Задание 4.</h2>");

{
    let a = 1;
    if (a > 0){
        document.write("Верно");
    }else{
        document.write("Неверно");
    }
}


document.write("<h2>Задание 5.</h2>");

{
    let a = 10;
    let b = 2;
    let summ = a + b;
    let difference = a - b;
    let multiply = a * b;
    let divide = a / b;
    document.write("Сумма: " + summ + "<br> Разность: " + difference + "<br> Произведение: " + multiply + "<br> Частное: " + divide + ".<br>");
    if(summ > 1){
        document.write("Сумма в квадрате:" + summ * summ);
    }
}


document.write("<h2>Задание 6.</h2>");

{
    let a = 10;
    let b = 2;
    if(( a > 2 && a < 11) || (b >= 6 && b < 14)){
        document.write("Верно");
    }else{
        document.write("Неверно");
    }
}


document.write("<h2>Задание 7.</h2>");

{
    n = 0;
    if( n >= 0 && n <= 15){
        document.write("Первая четверть часа.")
    }else if( n > 15 && n <= 30){
        document.write("Вторая четверть часа.")
    }else if( n > 30 && n <= 45){
        document.write("Третья четверть часа.")
    }else if ( n > 45 && n <= 59){
        document.write("Четвертая четверть часа.")
    }
}


document.write("<h2>Задание 8.</h2>");

{
    day = 31;
    if( day > 0 && day <= 10){
        document.write("Первая декада месяца.")
    }else if( day > 10 && day <= 20){
        document.write("Вторая декада месяца.")
    }else if( day > 20 && day <= 31){
        document.write("Третья декада месяца.")
    }
}


document.write("<h2>Задание 9.</h2>");

{
    let day = 51;
    let year = day / 365;
    if(year < 1){
        year += year + "(меньше года)";
    } 
    let month = day / 31;
    if(month < 1){
        month += month + "(меньше месяца)";
    } 
    let week = day / 7;
    if(week < 1){
        week += week + "(меньше недели)";
    } 
    let hour = day * 24;
    let minute = hour * 60;
    let sec = minute * 60;
    
    document.write(day +"дн.=<br> " + year  + " г.<br>" + month + " м.<br>" + week + " н.<br>" + hour + "ч.<br>" + minute + "мин.<br>"  + sec + "сек.<br>");
}


document.write("<h2>Задание 10.</h2>");

{
    let day = 364;
    let month = Math.ceil(day / 31);
    document.write( day + " день, " + month + " месяц ")

    switch(month){
        case 12:
        case 1:
        case 2:
        document.write("Зима");
        break;

        case 3:
        case 4:
        case 5:
        document.write("Весна");
        break;

        case 6:
        case 7:
        case 8:
        document.write("Лето");
        break;

        case 9:
        case 10:
        case 11:
        document.write("Осень");
        break;
    }
}

