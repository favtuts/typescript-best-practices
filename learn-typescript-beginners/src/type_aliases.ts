type StringOrNumber = string | number;

type PersonObject = {
    name: string;
    id: StringOrNumber;
};

const personObj1: PersonObject = {
    name: 'John',
    id: 1,
};

const personObj2: PersonObject = {
    name: 'Delia',
    id: 2,
};

const sayHelloFn = (person: PersonObject) => {
    return 'Hi ' + person.name;
};

const sayGoodbyeFn = (person: PersonObject) => {
    return 'Seeya ' + person.name;
};


console.log(sayHelloFn(personObj1));
console.log(sayGoodbyeFn(personObj2));