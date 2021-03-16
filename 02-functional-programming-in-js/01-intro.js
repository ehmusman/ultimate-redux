// redux is build on the principles of functional programming. so this section is crucial for learning

// What is functional programming

// following are the major programming paradigms
// 1- Functional
// 2- Object-Oriented
// 3- Procedural
// 4- Event Driven

// functional programming is actually composing a problem in side small a bunch of functions that takes some inputs and return some results.
// we cam bine them to create more complex function.
// they are more Concise
// Easier to debug
// Easier to test
// More scalable

// because we can call multiple functiona parallel and take advantages of CPU.


////////////////////////////

// in javascript the functions are first class citizens. which means we can treat then like any other variable.
// Assign to a variable
// pass as an argument
// return from other function

// function sayHello() {
//     return "Hello World"
// }
// let fn = sayHello  // here fn is just alias of function. we can call this function by this fn(). here we are not calling function we are just putting the raference of the function. we can also pass a wunction as an argument in othe function like

// function greet(fnMessage){
//     console.log(fnMessage())
// }
// greet(sayHello)


// function can also return a function
function sayHello() {
    return function () { // in this case this is an anonymous function
        return "Hello World"
    }
}
let fn = sayHello()
let message = fn();

// Higher order function
// higher order function is a funcition which take a function as an argument or it return a function. or both combinely
// it's possible we have used higher order function without knowing about it. like
const numbers = [1, 2, 3, 4]
numbers.map(number => number * 2) // this is an example of higher order function
// an other example is 
setTimeout(() => {
    console.log("Hello world")
}, 1000);
// this is also called higher order function because it take a function as an argument