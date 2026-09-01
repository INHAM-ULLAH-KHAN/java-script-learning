// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "1222"
tinderUser.name = "Inham"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regularUser = {
    email: "someone@gmail.com",
    fullname: {
        userFullName:{
            firstName: "Inham",
            LastName: "Khan"
        }
    }
}
// console.log(regularUser.fullname.userFullName);// ? search if available 



const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
// const bj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);





console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));







