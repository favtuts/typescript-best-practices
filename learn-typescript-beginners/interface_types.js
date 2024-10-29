"use strict";
let person1 = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
};
let person2 = {
    name: 'Sarah',
    location: 'Germany',
    isProgrammer: false,
};
let sayStuff = {
    sayHi: function (name) {
        return `Hi ${name}`;
    },
    sayBye: (name) => `Bye ${name}`,
};
console.log(sayStuff.sayHi('Heisenberg')); // Hi Heisenberg
console.log(sayStuff.sayBye('Heisenberg')); // Bye Heisenberg
