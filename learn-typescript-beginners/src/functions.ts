// Define a function called circle that takes a diam variable of type number, and returns a string
function circle_js(diam: number): string {
    return 'The circumference is ' + Math.PI * diam;
}
console.log(circle_js(10)); // The circumference is 31.41592653589793
  

const circle_es6 = (diam: number): string => {
    return 'The circumference is ' + Math.PI * diam;
};
console.log(circle_es6(10)); // The circumference is 31.41592653589793

// Using explicit typing 
const circle_explicit_typing: Function = (diam: number): string => {
    return 'The circumference is ' + Math.PI * diam;
}
console.log(circle_explicit_typing(10)); // The circumference is 31.41592653589793

/* TypeScript also infers the return type of the function */
// Inferred typing - TypeScript sees that circle is a function that always returns a string, so no need to explicitly state it
const circle_inferred_typing = (diam: number) => {
    return 'The circumference is ' + Math.PI * diam;
}
console.log(circle_inferred_typing(10)); // The circumference is 31.41592653589793


/* Add a question mark after a parameter to make it optional */
const add = (a: number, b: number, c?: number | string) => {
    console.log(c);

    return a + b;
}
console.log(add(5, 4, 'I could pass a number, string, or nothing here!'));


/* A function that returns nothing is said to return void */
const logMessage = (msg: string): void => {
    console.log('This is the message: ' + msg);
};

logMessage('TypeScript is superb'); // This is the message: TypeScript is superb


/* Declare a function variable use a function signature */
// Declare the varible sayHello, and give it a function signature that takes a string and returns nothing.
let sayHello: (name: string) => void;

// Define the function, satisfying its signature
sayHello = (name) => {
  console.log('Hello ' + name);
};

sayHello('Danny'); // Hello Danny