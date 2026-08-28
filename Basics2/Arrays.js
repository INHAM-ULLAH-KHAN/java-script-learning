// Array
const arr = [1, 2, 3, 4, 5]
console.log(arr[0]);
  
const heros = ["Ironman", "naruto", "Spiderman"]
console.log(heros);

const myArr2 = new Array('w', 'e', 'q')
console.log(myArr2);

// Methods

arr.push(6)
console.log(arr);

arr.pop()
console.log(arr);

arr.unshift(11)
console.log(arr);// add at the start, not optimised but use when necessary

console.log(arr.includes(3));
console.log(arr.indexOf(3));


const newArr = arr.join()
console.log(newArr);


// Slice, Splice

console.log("Real Array", arr);
const sliceArr = arr.slice(1, 3)
console.log("Slice array", sliceArr);

console.log("Real Array", arr);
const spliceArr = arr.splice(1, 3)
console.log("Splice array", spliceArr);
console.log("Real Array", arr);




