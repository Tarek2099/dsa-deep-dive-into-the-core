// Prototypal inheritance using constructor function
function User (name) {
    this.name = name;
    this.printName = function () {
        console.log(`The name is ${name}`);
        console.log("I'm printName");
        
        
    }
    console.log(this)
}

let tarek = new User("Tarek");
tarek.printName()