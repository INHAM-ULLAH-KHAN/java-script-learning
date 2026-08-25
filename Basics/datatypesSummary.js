// Primitive Data Types (7 Types)

// String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const socreValue = 100.5

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('134')
const anotherId = Symbol('134')  
console.log(id === anotherId); //Both are not same

// Non Primitive (Reference Type) 

// Arrays, Objects, Functions

const heros = ["Spiderman", "Ironman"] //Array

let myObject = {
    name = "Inham",
    age = 22,
}

const myFunction = function(){
    console.log("Hello World");
}

