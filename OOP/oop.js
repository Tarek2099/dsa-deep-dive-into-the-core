// Modern way to create object
class Person {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }
    greet () {
        console.log(`Hi I'm ${this.name} and ${this.age} years old`); 
    }
}

const Tarek = new Person("Tarek", 21)


// Inheritance
class Student extends Person {
    constructor(name, age, grade){
        super(name, age) // Call parent constructor
        this.grade = grade;
    }
    resume(){
        console.log(`Hi I'm ${this.name} and My CGPA is ${this.grade}`)
    }
}

const tarek = new Student("Tarek", 21, 4.00);
tarek.greet(); // Inherited from parent
tarek.resume(); 