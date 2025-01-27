const marvel_heros= [ "Iron Man", "Captain America", "Thor", "Black Widow", "Hulk"]
const dc= ["Superman", "Batman", "Wonder Woman", "The Flash", "Green Lantern"]

// marvel_heros.push(dc)
// console.log(marvel_heros);
// const all_heros=marvel_heros.concat(dc)
// console.log(all_heros);

// spread operator is used to merge the two arrays . layman example take the mirror and drop it . it spread and break

const all_new_heros=[...marvel_heros,...dc]
console.log(all_new_heros);

const nestedArray = [1, [2, [3, 4]], 5, [6, [7, 8]]];
const flatArray = nestedArray.flat(2);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

console.log(Array.isArray("shiv")); // to check if the value is array or not by using array.isArray() method
console.log(Array.from("shiv")); // convert string to array using array.from() method

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of( score1, score2, score3 )); // convert the values to array using array.of() method

