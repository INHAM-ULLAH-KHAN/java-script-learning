// Objects => Singleton, Literals, Construsctors

// Object literals 


const mySym = Symbol("KEY1")
const JsUSer = {
    name: "Inham",
    age: 22,
    location: "Islamabad",
    email: "inham@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "KEY2"
}
// console.log(JsUSer.email);
// console.log(JsUSer["email"]);
// console.log(JsUSer[mySym]);

JsUSer.email = "inhamullah@gmail.com"
// Object.freeze(JsUSer)
JsUSer.email = "ink@gmail.com"

// console.log(JsUSer);
JsUSer.greeting = function(){
    console.log(`Hello user`)
}
JsUSer.greeting2 = function(){
    console.log(`Hello user, ${this.name}`)
}
console.log(JsUSer.greeting());
console.log(JsUSer.greeting2());

