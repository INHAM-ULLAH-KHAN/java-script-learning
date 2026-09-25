function add(a , b){
    return a + b;
}
// console.log(add(1, 3))



function myName(){
    console.log("I");
    console.log("n");
    console.log("h");
    console.log("a");
    console.log("m");
    
}
// console.log(myName());

function addTwoNumbers(number1, number2) {
    if (typeof number1 === "number" && typeof number2 === "number") {
        console.log(number1 + number2);
    }
    else{
        console.log("Not a number");
        
    }

    
}
addTwoNumbers(34 , 3)
// Rest Operator
function calculatCartPrice(...num1){
    return num1;

}
console.log(calculatCartPrice(100, 200, 300));


const user = {
    userName : "Inham",
    price : 100
}
function handleObject(anyObj){
    console.log(`User name is ${anyObj.userName} and the price is ${anyObj.price}`);

    
}
// handleObject(user)
handleObject({
    userName : "Inhammmmm",
    price : 3000
})

const myNewArray = [200, 3000, 400]

function returnValue(getArray){
    return getArray[1]
}
console.log(returnValue(myNewArray))