// Dates 
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2026, 0, 20, 3, 2)// Year, Month, Day, Hours, Min

let myCreatedDate = new Date("2026-01-3")
// console.log(myCreatedDate.toLocaleString())


let myTime = Date.now()
// console.log(myTime);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);


newDate.toLocaleString('default', {
    weekday: "long",
})
