let ids: number[] = [1, 2, 3, 4, 5]; // can only contain numbers
console.log(ids)

let names: string[] = ['Danny', 'Anna', 'Bazza']; // can only contain strings
console.log(names)

let options: boolean[] = [true, false, false]; // can only contain true or false
console.log(options)

let books: object[] = [
    { name: 'Fooled by randomness', author: 'Nassim Taleb' },
    { name: 'Sapiens', author: 'Yuval Noah Harari' },
]; // can only contain objects
console.log(books)

let arr: any[] = ['hello', 1, true]; // any basically reverts TypeScript back into JavaScript
console.log(arr)

ids.push(6);
console.log(ids)
//ids.push('7'); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.


/*union types to define arrays containing multiple types*/
let person: (string | number | boolean)[] = ['Danny', 1, true];
person[0] = 100;
console.log(person)
//person[1] = {name: 'Danny'} // Error - person array can't contain objects