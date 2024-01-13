// if else conditional statements
// let a = 10;
// let b = 10;

// if(a > b){
//     console.log("a is greater than b");
// }
// else if (a<b)
// {console.log("b is greater than a");
// }
// else console.log("a is equal to b")
    
// let password = "asdfghjk";
// if(password =8){
//     console.log("welcome back"); // } else if(password<= 8){ //     console.log("password is too short");
// }
// else if(password>= 8){
//     console.log("password is too long");
// }else console.log("please provide a password ")
// --------------------------------------------------
// switch case(same as in c prog. lang.)
//_______________________________________________

// [for loop]
// for (let i = 0; i <= 10; i++) {
//   console.log("hello, World");
// }

// const pl = ["javScrit","golang","C++","JAVA"]
// const numbers = [1, 32, 23424, 213];

// console.log(pl.includes("JAVA")); //checks if the value is in the array or not

// console.log(pl.join("-")) // join the entire array
// console.log(pl.reverse()) // reverse the array
// console.log(pl.slice(0,2)) 
// console.log(numbers.sort()) // sort the array

//OBJECTS
// const person = {
//     firstName: "deejey",
//     age:19,
//     location: ['planet',"Earth"],
//     isProgrammer:  true,
// };
// person.lastName = "dev"//insert value in an object
// delete person.firstName;// delete values from object
// console.log(person["firstName"])
// console.log(person)


//excercies
// const car = {
//   type: "sedan",
//   model: "AE101",
//   color: "black",
// };
// console.log(car.type);
// console.log((car.type = "toyota"));
// car.wheels = 4;
// console.log(car);
//-----------------------------------------------------------

//Functions
// A function is a block of code that performs a specific task.
// function makes the code reuseable . we can declare it once and use it multiple times.

// function greet(){
//     console.log("this is a function");
// }
// // call the function
// greet();

// function sayHello (name){
//     console.log(`hello ${name}`);
// }
// sayHello("deejey");

// return -> function
// function add(x, y) {
//   return x + y;
// }
// const res1 = add(212,423)
// const res2 = add(21,423)
// const res3 = add(212,23)

// console.log(res1);
// console.log(res2);
// console.log(res3);

//exercise for functions
// function myfunction(a, b){
//     return a*b;
// };
// console.log(myfunction(69,3));

//function declearation 
// function sayHello(name){
//     console.log(`hello ${name}`)
// }
// sayHello("deejey")

//function Expression
// const greetings = function (username){
//     console.log(`Hello ${username}`);
// };
// greetings("deejey");
//-------------------------------------------



// callBack function:
//when we provide function as an (argument) to other function that function is known as callback fucntion

//example-1
// function showCallfunc(fn) {
//   const value = 10;
//   fn(value);
// }

// showCallfunc(function (value) {
//   console.log(value);
// });

//example-2
// function greet (name, cb){
//     console.log(`hello ${name}`)
//     cb()
// }
// function cb(){
//     console.log(`i am a callback function`)
// }
// greet("deejey",cb)
//----------------------------------------------------


// //exercise
// function showCallfunc(fn) {
//   const value = 10;
//   fn(value);
// }
// showCallfunc(function (value) {
//   console.log(value);
// });



//Scope in JavaScript refers to the current contexr of the code, which determines the accessibility of varriables to Javascript

//ther are two types of scopes in JavaScript.
// Global Scope variables are those decleared outside of a block
//Loacla Scope variables are those declared inside of a block.




// let textMessage = "hello"; // global variable
// console.log(textMessage)


// function showMessage(){
//     let textMessage = "hii" // local variable
//     console.log(textMessage)

// }
// console.log(textMessage)
// showMessage();

// //method inside an object
// const person = {
//     name:"deejey",
//     age: 19,
//     greet: function(){
//         return `hello, ny name is ${person.name} & i am ${person.age} years old.`;
//     }
// } 
// console.log(person.greet())

// //date and time
// const currentDate = new Date();
// console.log(currentDate)



// const date = new Date();
// console.log(date)

// const day = date.getDay();
 
// console.log(`day: ${day}`)

// console.log(date.toDateString())
// console.log(date.toTimeString())//differetn types of getting the outputs
// console.log(date.toLocaleTimeString())






// setTimeOUT function 
// setTimeout(function(){
//     console.log(`this function will be going to be execuited after 3 second`);

// },3000);

//stop the interval after 10 seconds
const intervalId = setInterval(function(){
 console.log(`this function is being execuited at the interval`);

},100);

//stop the interval after 5 seconds
setTimeout(function(){
    clearInterval(intervalId)
    console.log(`Interval stoped`)
},5000)