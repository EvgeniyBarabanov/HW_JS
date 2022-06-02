class User{
    #data;
    constructor(data){
        this.#data = data
    
    };

    edit(newData = {}){
        if(Array.isArray(newData) || 
        typeof newData != 'object'
        ) return;
        this.#data = {...this.#data,...newData}
    }

    get(){
        return this.#data
    }
}

class Contacts{
    #data = [];
    add(contactData = {}){
        let user = new User(contactData);

        if(!user.get) return;
        this.#data.push(user)
    }

    edit(){

    }

    remove(){

    }

    get(){
        return this.#data;
    }

}

let contacts = new Contacts(

)


/* let user1 = new User(
    {
        id: 1,
        name: 'eyheniy',
        email: 'evgeniy.barabanov.96@mail.ru',
        address: 'Homel, minskaya street',
        phone: '+375447104223'
    }
); */