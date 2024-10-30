interface Person {
  name: string;
  location: string;
  isProgrammer: boolean;
}

let personDN: Person = {
  name: 'Danny',
  location: 'UK',
  isProgrammer: true,
};
console.log(personDN);

let personSA: Person = {
  name: 'Sarah',
  location: 'Germany',
  isProgrammer: false,
};
console.log(personSA);

interface Speech {
  sayHi(name: string): string;
  sayBye: (name: string) => string;
}

let sayStuff: Speech = {
  sayHi: function (name: string) {
    return `Hi ${name}`;
  },
  sayBye: (name: string) => `Bye ${name}`,
};

console.log(sayStuff.sayHi('Heisenberg')); // Hi Heisenberg
console.log(sayStuff.sayBye('Heisenberg')); // Bye Heisenberg