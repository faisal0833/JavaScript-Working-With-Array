// // 1. Array filter ()
// const age1 = [32, 33, 16, 17, 18, 6, 40];

// function isVoter(vAge){
//     return vAge >= 18;
// }

// const voterList = age1.filter(isVoter);
// console.log(voterList);

// // 2. Array find ()
// const age1 = [32, 33, 16, 17, 18, 6, 40, 50];

// function checkPerson(pAge){
//     return pAge > 33;
// }

// const person = age1.find(checkPerson);
// console.log(person);

// // 3. Array map()
// const num = [32, 33, 16, 17, 18, 6, 40, 50];

// function newFunction(n){
//     return n * 2;
// }

// const newNumber = num.map(newFunction);
// console.log(newNumber);

// // 3. Array reduce()
// const num = [32, 33, 16];

// function getTotal(first, next){
//     return first + next;
// }

// const total = num.reduce(getTotal);
// console.log(total);

// 3. Array sort()
const fruits = ["Banana", "Orange", "Appale", "Mango"];
const sortedFruits = fruits.sort();
console.log(sortedFruits);
