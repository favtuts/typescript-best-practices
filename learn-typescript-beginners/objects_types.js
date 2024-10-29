"use strict";
// Declare a variable called person with a specific object type annotation
let person_entity;
// Assign person to an object with all the necessary properties and value types
person_entity = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
};
//person.isProgrammer = 'Yes'; // ERROR: should be a boolean
/*
person_entity = {
    name: 'John',
    location: 'US',
  };
*/
// ERROR: missing the isProgrammer property
