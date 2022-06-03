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
    #lastId = 0;
    
    add(contactData = {}){
        this.#lastId++;

        contactData.id = this.#lastId;

        let user = new User(contactData);

        if(!user.get) return;
        this.#data.push(user)
    }

    edit(id = 0, newData = {}){
        let user = this.get(id);

        if(!user) return;

        user.edit(newData)
    }

    remove(id = 0){
        if(!id) return;

        let dataTmp = this.#data.filter(elem =>{
            return elem.get().id != id
        });

        if(!dataTmp || dataTmp.length == 0) return;

        this.#data = dataTmp;
    }

    get(id = 0, showData = false){
        if(id > 0){
            let user = this.#data.find(elem =>{
                return elem.get().id == id; 
            });
        
            if (user) {
                if(showData) return user.get();
                return user;
            } else{
                return;
            }
        }

        return this.#data;
    }

}

let contacts = new Contacts(

)