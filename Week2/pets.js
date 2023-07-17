
const pet = {
    name: "bull",
    typeOfpet: "dog",
    age: 2,
    colour: "brown",
    eating() {
        console.log(this.name + " is eating");
    },
    drinking() {
        console.log(this.name + " is drinking");
    }
}

pet.eating();
pet.drinking();