const marvel_heros = ["Thor", "Ironman","Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// const combined_heros = marvel_heros.concat(dc_heros)
// console.log(combined_heros);
const all_new_heros = [...marvel_heros, ...dc_heros]//... is spread operator
// console.log(all_new_heros);

const another_array = [1, 2, 3, [ 4, 5, 6], 7, [6, 7, [4, 5]]]

const real_array = another_array.flat(Infinity)
// console.log(real_array);

 
console.log(Array.isArray("Inham"))
console.log(Array.from("Inham"))
console.log(Array.from({name: "Inham"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))//Arrays. is, of, from 
