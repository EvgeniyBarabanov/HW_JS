class User{
    #data;
    constructor(data){
        this.#data = data
    
    };

    
    get(){
        return this.#data
    }
}

let user1 = new User(
    {
        id: 1,
        name: 'eyheniy',
        email: 'evgeniy.barabanov.96@mail.ru',
        address: 'Homel, minskaya street',
        phone: '+375447104223'
    }
);