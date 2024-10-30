interface HasFormatter {
    format(): string;
}

class PersonFormatter implements HasFormatter {
    constructor(public username: string, protected password: string) { }

    format() {
        return this.username.toLocaleLowerCase();
    }
}

// Must be objects that implement the HasFormatter interface
let personDanny: HasFormatter;
let personJane: HasFormatter;

personDanny = new PersonFormatter('Danny', 'password123');
personJane = new PersonFormatter('Jane', 'TypeScripter1990');

console.log(personDanny.format()); // danny


let people: HasFormatter[] = [];
people.push(personDanny);
people.push(personJane);
console.log(people);