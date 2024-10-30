class PersonClass {
    name: string;
    isCool: boolean;
    pets: number;

    constructor(n: string, c: boolean, p: number) {
        this.name = n;
        this.isCool = c;
        this.pets = p;
    }

    sayHello() {
        return `Hi, my name is ${this.name} and I have ${this.pets} pets`;
    }
}

const varPerson1 = new PersonClass('Danny', false, 1);
//const varPerson2 = new Person('Sara', 'yes', 6); // ERROR: Argument of type 'string' is not assignable to parameter of type 'boolean'.

console.log(varPerson1.sayHello()); // Hi, my name is Danny and I have 1 pets


class PersonWithModifiers {
    readonly name: string; // This property is immutable - it can only be read
    private isCool: boolean; // Can only access or modify from methods within this class
    protected email: string; // Can access or modify from this class and subclasses
    public pets: number; // Can access or modify from anywhere - including outside the class

    constructor(n: string, c: boolean, e: string, p: number) {
        this.name = n;
        this.isCool = c;
        this.email = e;
        this.pets = p;
    }

    sayMyName() {
        console.log(`Your not Heisenberg, you're ${this.name}`);
    }
}

const varPersonM1 = new PersonWithModifiers('Danny', false, 'dan@e.com', 1);
console.log(varPersonM1.name); // Fine
//varPersonM1.name = 'James'; // Error: read only
//console.log(varPersonM1.isCool); // Error: private property - only accessible within Person class
//console.log(varPersonM1.email); // Error: protected property - only accessible within Person class and its subclasses
console.log(varPersonM1.pets); // Public property - so no problem


class PersonConciseConstructor {
    constructor(
        readonly name: string,
        private isCool: boolean,
        protected email: string,
        public pets: number
    ) { }

    sayMyName() {
        console.log(`Your not Heisenberg, you're ${this.name}`);
    }
}

const varPersonC1 = new PersonConciseConstructor('Danny', false, 'dan@e.com', 1);
console.log(varPersonC1.name); // Danny



class Programmer extends PersonConciseConstructor {
    programmingLanguages: string[];

    constructor(
        name: string,
        isCool: boolean,
        email: string,
        pets: number,
        pL: string[]
    ) {
        // The super call must supply all parameters for base (Person) class, as the constructor is not inherited.
        super(name, isCool, email, pets);
        this.programmingLanguages = pL;
    }
}