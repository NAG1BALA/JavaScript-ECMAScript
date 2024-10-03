const Animal = {
    name: '',
    eat() {
        console.log(`${this.name} ест.`);
    }
}


const Dog = {
    name: '',
    bark() {
        console.log(`${this.name} лает`);
    }
}

Dog.name = "Лаки";
Dog.eat = Animal.eat;
Dog.eat();