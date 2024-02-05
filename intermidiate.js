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
// getPersionES6 = (name, age, height) => {
//   return {
//     name,
//     age,
//     height,
//   };
// };
// console.log(getPersionES6("Zachary", 23, 195));
// Expected output: { name: 'Zachary', age: 23, height: 195 }
// -------------------------------


//Default funtion parameters, introduced in EMCAScript 6(ES6), allow you to assign default values to function parameters. when a function is called, and an arguement is not provided for parameter, the default values will be used instead. this feature makes it easier to  handle cases where arguments might be missing or underfined.

// function countTo5(count ){
//   if (count == true) {
//     for (let i = 0; i < 5; i++) {
//       console.log( `count ${i}`);
      
//     }
//   }
// }
// countTo5(true);

// function ratings(rate ){
//   if(rate == 5){
//     console.log(`high rating`);
//   }else if(rate== 0){
//     console.log(`low ratings`);
//   }
// }
// ratings(1)

// ----------------------------
// 1. Create function name (multiply) with 2 parameters (a, b) which will multiply the parameters value
// 2. Provide 1 as the default value to parameter "b"

// function multiply(a, b=1){
//   return a * b;
// }
// console.log(multiply(5,5))


// The spread operator is a new addition to the set of operators in JavaScript ES6.
// It takes in an iterable (e.g an array) and expands it into individual elements.
// The spread operator is commonly used to make shallow copies of JS objects.
// Using this operator makes the code concise and enhances its readability.


// function giveMe4(a,b,c,d){
//   console.log("a",a);
//   console.log("b",b);
//   console.log("c",c);
//   console.log("d",d);
// }

// const colors = ["red", "green", "blue", "yellow"]
// giveMe4(...colors);


// const strNums = ["one" ,"two","three"]
// const morestrNums = ["four" , "five" , "six"];
// const concat = [ ...strNums, ...morestrNums];

// console.log(concat)


// let peoples = ["deejey", "alex", "jordan"];
// const allpeps = ["kumar", ...peoples];
// console.log(allpeps);


// const obj1 = {x: 1, y:2}
// const obj2 = {z: 3}
// const obj3 = {...obj1, ...obj2}
// console.log(obj3)

// let arr = [1, 2, 3];
// let arr2 = [4, 5];

// const cloneArr = [...arr, ...arr2];

// const user = {
//   name: "deeejey",
//   age: 19,
// };
// const cloneUser = { ...user };

// console.log(cloneUser);
// console.log(cloneArr);

// Destructuring allows us to "upack" values from data-structure (Arrays, Objects) into seprate distinct variables.

// const asd=["one", "two"];

// const [one,two,three]= asd;
// console.log(one);
// console.log(two);
// console.log(three);

// function f(){
//     return[33,66]
// }
// let a,b;
// [a,b]=f();
// console.log(a)
// console.log(b)

//Assigning the rest of an array to a variable
// const[a, ...b]= ['one', 'two','three'];
// console.log(b);

// exercise
// const colors = ["red", "yellow", "blue","green"];
// const [color1, color2, color3]= colors;
// console.log(color1, color2, color3)

//In object destructing order doesnt matter but the name does matter

// const student = {name: "deejey", position:"001", rollno: 16}
// const {name}=student;
// const {position}=student;
// console.log(name);
// console.log(position)


// const person= {
//     name: "james",
//     age: 90,
//     gender: "Male",
//     country: "INDIA",
// }
// const{name,age,country}=person;
// console.log(name);
// console.log(age);
// console.log(country);



// //renaming tag in object 
// const num = {x: 100, y:200};
// const {x:new1,y:new2}=num;
// console.log(new1)
// console.log(new2)

// //obect destructuring and rest opearator
// let {a, b , ...rest } = {a:109 , b:213 , c:1231 ,d:213};
// console.log(rest)


//Destructig in functions
// const person={
//     name:"deejey",
//     age:"20",
//     country:"india",
// }
// function printPersonInfo({name, age , country}){
//     console.log (`name: ${name}`)
//     console.log (`age: ${age}`)
//     console.log (`country:${country}`)
// }
// printPersonInfo(person);


//nested detructing
// const songs = [
//   { name: "Lucky You", singer: "Joyner", duration: 4.34 },
//   { name: "Just Like You", singer: "NF", duration: 3.23 },
//   { name: "Humble", singer: "Kendrick Lamar", duration: 2.33 },
//   { name: "Old Town Road", singer: "Lil Nas X", duration: 1.43 },
//   { name: "Cold Shoulder", singer: "Central Cee", duration: 5.23 },
// ];

// // const [, , { singer }] = songs;
// const [, , { singer: s }] = songs;
// console.log(s);


// const data = {
//     user: {
//       id: 123,
//       name: "John Doe",
//       age: 30,
//       email: "john.doe@example.com",
//       address: {
//         city: "New York",
//         country: "USA",
//       },
//       hobbies: ["Reading", "Painting", "Cooking"],
//       scores: {
//         math: 95,
//         science: 88,
//         history: 75,
//       },
//     },
//     products: [
//       { id: 1, name: "Laptop", price: 1000 },
//       { id: 2, name: "Phone", price: 800 },
//       { id: 3, name: "Tablet", price: 500 },
//     ],
//     settings: {
//       darkMode: true,
//       notifications: {
//         email: true,
//         sms: false,
//         push: true,
//       },
//       language: "English",
//     },
//   };
  

// // Extracting data using object destructuring
// const {
//   user: {
//     name,
//     age,
//     address: { city, country },
//     hobbies,
//     scores: { math, science, history },
//     email,
//   },
//   products: [product1, product2, product3],
//   settings: {
//     darkMode,
//     notifications: {
//       email: emailNotifications,
//       sms: smsNotifications,
//       push: pushNotifications,
//     },
//     language,
//   },
// } = data;

// // Logging the extracted data using template literals
// console.log(`Name: ${name}`);
// console.log(`Age: ${age}`);
// console.log(`Address: ${city}, ${country}`);
// console.log(`Hobbies: ${hobbies.join(", ")}`);
// console.log(`Math Score: ${math}`);
// console.log(`Science Score: ${science}`);
// console.log(`History Score: ${history}`);
// console.log(`Product 1: ${product1.name} - $${product1.price}`);
// console.log(`Product 2: ${product2.name} - $${product2.price}`);
// console.log(`Product 3: ${product3.name} - $${product3.price}`);
// console.log(`Dark Mode: ${darkMode}`);
// console.log(`Email Notifications: ${emailNotifications}`);
// console.log(`SMS Notifications: ${smsNotifications}`);
// console.log(`Push Notifications: ${pushNotifications}`);
// console.log(`Language: ${language}`);



// The ternary operator in JavaScript is a concise way of writing conditional expressions. It is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), an expression to execute if the condition is true, followed by a colon (:), and an expression to execute if the condition is false.

// condition ? exprIfTrue : exprIfFalse;

// ------------------------------------

// let password =8;

// function passwordChecker(ps){
//     // if (ps==8){
//     //     return `strong password`;
//     // }
//     // else{
//     //     return `password should be 8 characters`;
//     // }
// return ps === 8 ? `strong password`: "password should be 8 charecters.";

// }
// const res = passwordChecker(password);
// console.log(res)


// const age = 1;
// const isAdult = age>= 18? "Adult": "not an adult";
// console.log(isAdult);


// const money = true;
// const haveMoney = money === true ? "buy Products":"bring money";
// console.log(haveMoney)


//  the "for...in" loop in javascript is used to iterate over the enumerable properties of an object. it is a way to loop through the keys (property names) of an object. for (let key in object) {...}
//   Here, variable is a variable that will represent each property name (key) during each iteration, and object is the object being looped through.


// let person = {
//     name: "deejey",
//     age: 20,
//     gender:"male"
// };

// for (let keys in person){
//     console.log(keys, person[keys]);
// }



// let  list = [ 'one', 'two ', 'three', 'four'];
// for (let index in list){
//     console.log(`${index}:${list[index]}`)
// }


const obect = { a:1, b:2 , c:22};
for (const properties in obect){
    console.log(`${properties}: ${obect[properties]}`)
}