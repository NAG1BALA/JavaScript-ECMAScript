const Person = {
    name: '',
    age: 0,
    gender: '',

    introduce() {
        console.log(`My name is ${this.name}. I'm ${this.age} years old and i identify as ${this.gender}.`);
    },
    changeName(newName) {
        this.name = newName;
    }
}

Person.name = "Artem";
Person.age = 26;
Person.gender = 'male';

Person.introduce();
Person.changeName('Mike');
