const name = "Inham"
const degree = " BSCS"

// console.log(name + degree);
// console.log(`Hellow my name is ${name}, I am a student of ${degree}`);

const gameName = new String('Inham')
// console.log(gameName[0]);

// console.log(gameName._proto_);

// console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('m'));
const sliceName = gameName.substring(0,3);
console.log(sliceName);
const newString = gameName.slice(-4, 3);
console.log(newString);

const newStringOne = "  Inham   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.google.com/%20Whatever"

console.log(url.replace('%20', '---'));
console.log(url.includes('google'))

dashes = "Inham-Ullah-Khan"

console.log(dashes.split('-'));
