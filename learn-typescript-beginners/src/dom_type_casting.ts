/*
const link = document.querySelector('a');
console.log(link.href); // ERROR: Object is possibly 'null'. TypeScript can't be sure the anchor tag exists, as it can't access the DOM
*/


// Here we are telling TypeScript that we are certain that this anchor tag exists
const link = document.querySelector('a')!;
console.log(link.href); // https://www.heomi.net

/*
const form = document.getElementById('signup-form');

console.log(form.method);
// ERROR: Object is possibly 'null'.
// ERROR: Property 'method' does not exist on type 'HTMLElement'.
*/

const form = document.getElementById('signup-form') as HTMLFormElement;
console.log(form.method); // post

form.addEventListener('submit', (e: Event) => {
    e.preventDefault(); // prevents the page from refreshing
  
    //console.log(e.tarrget); // ERROR: Property 'tarrget' does not exist on type 'Event'. Did you mean 'target'?
    console.log(e.target);
  });
  
