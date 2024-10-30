interface PersonInterface {
    name: string;
    age: number;
}

function sayHi(person: PersonInterface) {
    console.log(`Hi ${person.name}`);
}

sayHi({
    name: 'John',
    age: 48,
}); // Hi John


// Extending an interface:
interface Animal {
    name: string
}

interface Bear extends Animal {
    honey: boolean
}

const bear: Bear = {
    name: "Winnie",
    honey: true,
}
console.log(bear);

//Extending a type via intersections:
type AnimalType = {
    name: string
}

type BearType = AnimalType & {
    honey: boolean
}

const bear2: BearType = {
    name: "Winnie",
    honey: true,
}

console.log(bear);


// Adding new fields to an existing interface:
interface AnimalExisting {
    name: string
}

// Re-opening the Animal interface to add a new field
interface AnimalExisting {
    tail: boolean
}

const dog: AnimalExisting = {
    name: "Bruce",
    tail: true,
}

console.log(dog);

// Interfaces can also define function signatures
interface PersonSignature {
    name: string
    age: number
    speak(sentence: string): void
}

const personIS: PersonSignature = {
    name: "John",
    age: 48,
    speak: sentence => console.log(sentence),
}

personIS.speak("What's your name?")