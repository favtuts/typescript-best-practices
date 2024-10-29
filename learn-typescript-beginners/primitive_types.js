"use strict";
/* Explicit type*/
/*
let id_post: number = 5;
let firstname: string = 'danny';
let hasDog: boolean = true;

let unit: number; // Declare variable without assigning a value
unit = 5;
*/
/* Implicit type*/
let post_id = 5; // TS knows it's a number
let firstname = 'danny'; // TS knows it's a string
let hasDog = true; // TS knows it's a boolean
//hasDog = 'yes'; // ERROR
/* A union type*/
let age;
age = 26;
age = '26';
