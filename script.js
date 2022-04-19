let Contacts = function () {
    this.get = function () {
        this.surname = prompt("Введите фамилию");
        this.name = prompt("Введите имя");
        this.patronymic = prompt("Введите отчество");
        this.age = +prompt("Введите возвраст");
        this.phone = prompt("Введите телефон");
        this.email = prompt("Введите электронную почту");
    }
    this.verification = function () {
        if (this.age < 18){
            return "несовершеннолетний";
        }else{
            return "совершеннолетний";
        }
    }
    this.show = function () {
        console.log(this.surname + " " + this.name + " " + this.patronymic + ", полных лет: " + this.age + ", телефон: " + this.phone + ", Электронная почта: " + this.email + ", " + this.verification());
    }
}

let contact1 = new Contacts();
contact1.get();
contact1.verification();
contact1.show();

/* let contact2 = new Contacts();
contact2.get();
contact2.verification();
contact2.show();

let contact3 = new Contacts();
contact3.get();
contact3.verification();
contact3.show(); */