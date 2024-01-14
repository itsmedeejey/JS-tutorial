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
//     console.log("hey");
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
// setTimeout( ()=> {
//   console.log("Hello");
//   setTimeout( ()=> {
//     console.log("hey");
//     setTimeout( ()=> {
//       console.log("Namaste");
//       setTimeout( ()=> {
//         console.log("Hi");
//         setTimeout( ()=> {
//           console.log("Bonjour");
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 2000);

//---------------------------------------------------

//Enhanced object literals, introduced in ECMAScript 6 (ES6), are a set of enhancements to the syntax for defining objects in JavaScripts. These enhancements make it more conevenient and concise to define object properties and methods


// function user(name, age, work){
//   return {
//    name,
//    age,
//    work,
//    intro: function(){
//     console.log(`my name is ${name} & i am ${age} years old and i work as a ${work} `)
//    }
//   };
// }
// const user1 = user("deejey",19,"programmer");
// const user2 = user("dhanjyoti",19,"webdev");
// console.log(user1);
// console.log(user2);


// -------------------------------
// REFACTOR ES5 CODE TO ES6 (Enhanced Object Literals)
// ES5 code
// var a = 1,
//   b = 2,
//   c = 3;
// obj = {
//   a: a,
//   b: b,
//   c: c,
// };

// obj.a = 1, obj.b = 2, obj.c = 3

// REFACTORING ES5 CODE TO ES6
// const a = 1
// const b = 2
// const  c = 3

// obj = {a,b,c,};

// console.log(obj)



// -------------------------------
// ES5 code
// var lib = {
//   sum: function (a, b) {
//     return a + b;
//   },
//   mult: function (a, b) {
//     return a * b;
//   },
// };

// console.log(lib.sum(2, 3)); // 5
// console.log(lib.mult(2, 3)); // 6
// -------------------------------
// ES6 code
// const lib={
//   sum: (a,b) =>  a+b,
//   mult:(a,b) => a * b
// };
// console.log(lib.sum(12,12))
// console.log(lib.mult(12,12))


// -------------------------------
// function getPersionES5(name, age, height) {
//   return {
//     name: name,
//     age: age,
//     height: height,
//   };
// }

// getPersionES5("Zachary", 23, 195);
// Expected output: { name: 'Zachary', age: 23, height: 195 }
// -------------------------------

// -------------------------------
getPersionES6 = (name, age, height) => {
  return {
    name,
    age,
    height,
  };
};
console.log(getPersionES6("Zachary", 23, 195));
// Expected output: { name: 'Zachary', age: 23, height: 195 }
// -------------------------------


//Default funtion parameters, introduced in EMCAScript 6(ES6), allow you to assign default values to function parameters. when a function is called, and an arguement is not provided for parameter, the default values will be used instead. this feature makes it easier to  handle cases where arguments might be missing or underfined.