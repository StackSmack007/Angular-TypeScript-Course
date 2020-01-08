class User {
    constructor(private name:string){    }
    sayHello() {
        return `${this.name} says hi!`;
    }
}

const user = new User("Pesho");
console.log(user.sayHello())