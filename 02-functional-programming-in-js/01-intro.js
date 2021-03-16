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
// function sayHello() {
//     return function () { // in this case this is an anonymous function
//         return "Hello World"
//     }
// }
// let fn = sayHello()
// let message = fn();

// // Higher order function
// // higher order function is a funcition which take a function as an argument or it return a function. or both combinely
// // it's possible we have used higher order function without knowing about it. like
// const numbers = [1, 2, 3, 4]
// numbers.map(number => number * 2) // this is an example of higher order function
// // an other example is 
// setTimeout(() => {
//     console.log("Hello world")
// }, 1000);
// // this is also called higher order function because it take a function as an argument

/////////////////////////////////////////////////////////////

// Function composition
// in functional programming we make different small functions and than compose them to solve a real world complex problem

// here we have a problem
// let input = "  Javascript  "
// let output = "<div>" + input.trim() + "</div>"

// we have to trim the input first than we have to wrap it in the div element
// lets solve this by using functional programming
// let trim = str => str.trim()
// let wrap = str => `<div>${str}</div>`
// let toLowerCase = str => str.toLowerCase()

// let input = "  Javascript  "
// const output = wrap(toLowerCase(trim(input)))

// here is the only problem of paranthesis. as the problem becomes more and more comples the paranthesis become increases. that is a pain in the neck. we'll see how to solve this problem

/////////////////////////////////////////////

// Composing and piping
// install lodash and use compose and pipe from it
import { compose, pipe } from 'lodash/fp'
// let trim = str => str.trim()
// let wrap = str => `<div>${str}</div>`
// let toLowerCase = str => str.toLowerCase()

// let input = "  Javascript  "

// // const transform = compose(wrap, toLowerCase, trim) // here order matters alot from right to left. for order from left to right we can use pipe instead of compose
// const transform = pipe(trim, toLowerCase, wrap)
// transform(input)


//////////////////////////////////////////////////////////////////////
// Currying a function
// at some instant of time if we need to change the div with span. that how this will happen. we'll go manually to change the div.
// we'll create one function with two input arguments

let trim = str => str.trim()
let wrap = type => str => `<${type}>${str}</${type}>`
let toLowerCase = str => str.toLowerCase()

let input = "  Javascript  "

// const transform = compose(wrap, toLowerCase, trim) // here order matters alot from right to left. for order from left to right we can use pipe instead of compose
const transform = pipe(trim, toLowerCase, wrap("div")) // we have added to arguments. but in pipe function we only pass one argument in the function

console.log(transform(input))

// how to solve this dual argument problem? 
function add1(a) {
    return function (b) {
        return a + b
    }
}
add1(1)(5) // add(1) will return a function we'll call that function with (5) these paranthesis with passing 5. (a,b) => a+b

// in pipe() // output of first is the input of second, output of second becomes input of third and so on


///////////////////////////////////////////////////////////

// Pure function
// a function is pure function which return same result when same arguiment is passed to it.
function add(a, b) {
    return a + b
}
add(1, 2)
// this is the example of pure function
function random(a) {
    return Math.random() * a
}
random(5)
 // this is not a pure function

 // so in Pure function
 // 1- we dont get random values
 // no currnt date/time
 // we canot read or change global state (DOM, files, db etc)
// in practice not every function is a pure.
// in practice we have special functions called reducers. we have to make it sure that the reducers should be pure and other function can be impure.
// in pure functions we cannot mutate the parameters.

// benefits of pure functions
// self documenting
// easily testable,
// concurrency // means they cann be run parallel.
// Cacheable
