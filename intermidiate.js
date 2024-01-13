// template string

// console.log (`this is some
// random text ${2*2}`)

// const firstName = "deejey"
// const lastName = "dev"

// console.log(`my name is ${firstName} ${lastName}`)
// console.log(`${["one", "two" , "three"]}`)

// const text = `the quick
// brown fox
// jumps form 
// the   tree`;
// console.log(text)
//---------------------------------------------------------------




//Arrow functions//, also known as fat arrow functions, are a concise and shorter wat to define functions in Javascript.They were introduced in ECMAScript 6(ES6) and provide a more compact syntax compared to traditional function expressions. 


//old way of declearing and execuiting a fucntion
// function greet(username)
// {
//     return `HEllo ${username}`;
// }

// console.log(greet("deejey"))

// the new way of execuiting a fucntion AKA arrow function
//1.
// greet = username => `HEllo ${username}`; //if there is one peremeter then no need to include "()" or the  RETURN keyword or the {} brackets //
// console.log(greet("deejey"))
// //2.
// greet = (username)=>{
//     return `hey ${username}`;
// };
// console.log(greet("deejey"))
// if there are more than one perameter and more than one line of code inside the function we have to write the syntax like this.//


// const double = (number) => number* 2;
// console.log(double(100))


// -------------------------------------
// REFACTOR THIS CODE TO ES6 ARROW FUNCTIONS.

// setTimeout(function () {
//   console.log("Hello");
//   setTimeout(function () {
//     console.log("Hey");
//     setTimeout(function () {
//       console.log("Namaste");
//       setTimeout(function () {
//         console.log("Hi");
//         setTimeout(function () {
//           console.log("Bonjour");
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

// lets make it in arrow function =>
setTimeout( ()=> {
  console.log("Hello");
  setTimeout( ()=> {
    console.log("Hey");
    setTimeout( ()=> {
      console.log("Namaste");
      setTimeout( ()=> {
        console.log("Hi");
        setTimeout( ()=> {
          console.log("Bonjour");
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);
