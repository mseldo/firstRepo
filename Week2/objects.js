let day = "smonday";
let alarm = "none";

const persons = {
    personName: "Hassan",
    age: 20,
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am",
    music: [
        "moosic",
        "more moosic"
    ],
    sayHi: ()=>{
        return `Hello my name is ${this.personName}`;
    }
}

if (day == "Saturday" || day == "sunday"){
    console.log(persons.weekendAlarm);
} else {
    console.log(persons.weekdayAlarm);
}

let randNum = Math.floor(Math.random() * persons.music.length);
console.log("i love " + persons.music[randNum]);

console.log(persons.sayHi());