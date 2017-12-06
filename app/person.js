import $ from 'jquery';

class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello(){
        //return 'Hello, my name is' + this.name;
        return `Hello my name is ${this.name}`;
    }

    sayGoodbye() {
        return `Na na na na na na na Hey Hey Hey, Goodbye!`
    }
}

class SuperPerson extends Person {
    constructor(name) {
        super(name);
    }

    superSayHi(){
        return `HI, MY NAME IS ${this.name.toUpperCase() }`;
    }

    sayHello() {
        // const container = $("<h1>", {
        //     text: super.sayHello()
        // });
        //
        // $("#root").append(container);
        const container = docuement.createElement('h1');
        container.innerText = super.sayHello();
        document.getElementById("root").appendChild(container);
        return;
    }
}



export default SuperPerson;
