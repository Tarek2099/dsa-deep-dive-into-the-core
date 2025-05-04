// Make a blue print of Animal class
class Animal {
    speak() {
        console.log(`The animal makes a sound`);
        
    }
}

class Dog extends Animal {
    speak() {
        console.log("The Dog is barking");
        
    }
}
class Cat extends Animal{
    speak() {
        console.log("The Cat meows");
        
    }
}

const animals = [new Animal(), new Dog(), new Cat()]
animals.forEach(animal => animal.speak())

