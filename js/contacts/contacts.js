class User{
    #data;
    
    constructor(data){
        this.#data = data;
    };

    edit(newData = {}){
        if(Array.isArray(newData) || 
        typeof newData != 'object'
        ) return;
        this.#data = {...this.#data,...newData}
    }

    get(){
        return this.#data;
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

        this.#data = dataTmp;
    }

    get(id = 0, showData = false, printData = false){

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
        } else{
            if(showData){ 
                let dataTmp = this.#data.map(elem =>{
                    return elem.get();
                });

                if(dataTmp && dataTmp.length > 0){
                    return dataTmp;
                }
            }
        }

        if(printData) this.#data.forEach(elem =>{
            console.log(elem.get());
        });

        return this.#data;
    }
}

class DOM{
    static create(type){
        return document.createElement(type)
    };

    static search(selector){
        return document.querySelector(selector)
    };

}

class ContactsApp extends Contacts{
    #inputNameElem;
    #inputEmailElem;
    #inputAddressElem;
    #inputPhoneElem;
    #contactsListElem;
    #contactsFormElem;
    #submitFormElem;

    onAdd = () =>{

        let contactsData = {};

        if(this.#inputNameElem.value.length > 0){
            contactsData.name = this.#inputNameElem.value;
        }
        
        if(this.#inputEmailElem.value.length > 0){
            contactsData.email = this.#inputEmailElem.value;
        }

        if(this.#inputAddressElem.value.length > 0){
            contactsData.address = this.#inputAddressElem.value;
        }

        if(this.#inputPhoneElem.value.length > 0){
            contactsData.phone = this.#inputPhoneElem.value;
        }
        
        if(contactsData.name || contactsData.email || contactsData.address || contactsData.phone) this.add(contactsData);
            else return;

        this.#inputNameElem.value = "";
        this.#inputEmailElem.value = "";
        this.#inputAddressElem.value = "";
        this.#inputPhoneElem.value = "";

        this.update();

        document.cookie = 'storageExpiration=true; max-age=' + 864000;
        
    }

    update(){
        let data = this.get(0, true);

        this.#contactsListElem.innerHTML = "";

        data.forEach((user) => {

            const ulElem = DOM.create('ul');
            ulElem.classList.add('user');

            const nameElem = DOM.create('li');

            const emailElem = DOM.create('li');

            const addressElem = DOM.create('li');

            const phoneElem = DOM.create('li');

            const btnEditElem = DOM.create('button')
            btnEditElem.classList.add('user__btn_edit');
            btnEditElem.innerHTML = "Edit";

            const btnRemoveElem = DOM.create('button')
            btnRemoveElem.classList.add('user__btn_remove');
            btnRemoveElem.innerHTML = "X";

            if(user.name == undefined || user.name == '') user.name = "";
            nameElem.innerHTML = user.name;

            if(user.email == undefined || user.email == '') user.email = "";
            emailElem.innerHTML = user.email;

            if(user.address == undefined || user.address == '') user.address = "";
            addressElem.innerHTML = user.address;

            if(user.phone == undefined || user.phone == '') user.phone = "";
            phoneElem.innerHTML = user.phone;

            ulElem.append(nameElem, emailElem, addressElem, phoneElem, btnEditElem, btnRemoveElem);
            this.#contactsListElem.append(ulElem);
            
            
            btnEditElem.addEventListener('click', () =>{
                this.onEdit(user.id);
            });

            btnRemoveElem.addEventListener('click', () =>{
                this.onRemove(user.id);
            });
        });
        
        data = JSON.stringify(data)
        localStorage.setItem('usersData', data);
        
    }

    onEdit(id){
        let user = this.get(id, true);

        if(!user) return;

        let userFormEditElem = DOM.search('.contact__form_edit');

        if(userFormEditElem) userFormEditElem.remove();

        userFormEditElem = DOM.create('form');
        userFormEditElem.classList.add('contact__form_edit');
        userFormEditElem.addEventListener("submit", (event) => {
            event.preventDefault();

            let newData = {};

            newData.name = inputNameElem.value;
            newData.email = inputEmailElem.value;
            newData.address = inputAddressElem.value;
            newData.phone = inputPhoneElem.value;

            userFormEditElem.remove();

            if(newData.name || newData.email || newData.address || newData.phone) this.edit(id, newData);
            else this.remove(id);
            
            this.update(); 
            
        }, true);

        const inputNameElem = DOM.create('input');
        inputNameElem.setAttribute('name', 'name');
        inputNameElem.placeholder = "enter name";

        const inputEmailElem = DOM.create('input');
        inputEmailElem.setAttribute('type','email');
        inputEmailElem.setAttribute('name', 'email');
        inputEmailElem.placeholder = "enter email";

        const inputAddressElem = DOM.create('input');
        inputAddressElem.setAttribute('name', 'address');
        inputAddressElem.placeholder = "enter address";

        const inputPhoneElem = DOM.create('input');
        inputPhoneElem.setAttribute('name', 'phone');
        inputPhoneElem.setAttribute('type','tel');
        inputPhoneElem.placeholder = "enter phone";

        const btnSaveElem = DOM.create('button');
        btnSaveElem.setAttribute('type', 'submit');
        btnSaveElem.classList.add('user__btn_save');
        btnSaveElem.innerHTML = "Save";

        if(user.name && user.name.length > 0){
            inputNameElem.value = user.name;
        }

        if(user.email && user.email.length > 0){
            inputEmailElem.value = user.email;
        }

        if(user.address && user.address.length > 0){
            inputAddressElem.value = user.address;
        }

        if(user.phone && user.phone.length > 0){
            inputPhoneElem.value = user.phone;
        }

        userFormEditElem.append(inputNameElem, inputEmailElem, inputAddressElem, inputPhoneElem, btnSaveElem)
        document.body.append(userFormEditElem);
        
    }

    onRemove(id){
        this.remove(id);
        this.update();
    }
    

    start(idElem){
        if(!idElem) return;

        const appElem = DOM.search(`#${idElem}`);
        if(!appElem) return;

        this.#contactsFormElem = DOM.create('form');
        this.#contactsFormElem.classList.add('contacts__form');
        this.#contactsFormElem.addEventListener("submit", (event) => {
            event.preventDefault();
            this.onAdd();
          }, true);
        
        this.#contactsListElem = DOM.create('div');
        this.#contactsListElem.classList.add('contacts__list');

        this.#inputNameElem = DOM.create('input');
        this.#inputNameElem.setAttribute('name', 'name');
        this.#inputNameElem.placeholder = "enter name";

        this.#inputEmailElem = DOM.create('input');
        this.#inputEmailElem.setAttribute('type','email');
        this.#inputEmailElem.setAttribute('name', 'email');
        this.#inputEmailElem.placeholder = "enter email";

        this.#inputAddressElem = DOM.create('input');
        this.#inputAddressElem.setAttribute('name', 'address');
        this.#inputAddressElem.placeholder = "enter address";

        this.#inputPhoneElem = DOM.create('input');
        this.#inputPhoneElem.setAttribute('name', 'phone');
        this.#inputPhoneElem.setAttribute('type','tel');
        this.#inputPhoneElem.placeholder = "enter phone";

        this.#submitFormElem = DOM.create('input');
        this.#submitFormElem.setAttribute('type', 'submit');
        this.#submitFormElem.value = "Добавить";

        this.#contactsFormElem.append(this.#inputNameElem, this.#inputEmailElem, this.#inputAddressElem, this.#inputPhoneElem, this.#submitFormElem);
        appElem.append(this.#contactsFormElem, this.#contactsListElem);

    };
    
    getStorage(){
        if(!document.cookie.includes('storageExpiration=true')){
            localStorage.clear();
        }
        let dataLocal = localStorage.getItem('usersData');

        if(!dataLocal || dataLocal.length == 0) return;

        dataLocal = JSON.parse(dataLocal);

        if(!dataLocal || dataLocal.length == 0) return;

        dataLocal.forEach(item => {
            this.add(item);
        });
        this.update();
    }
    
}

let contactsApp = new ContactsApp();
contactsApp.start('app');
contactsApp.getStorage();
