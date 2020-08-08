const numbers = [2,4,6,8,2,4,5,5,7,8,9];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// const square = numbers.map(elements => elements * elements);
// console.log(square);;

const square = numbers.map(elements => elements % 2 == 0);
console.log(square);

// const evenNumber = numbers.filter(x => x % 2 === 0);
// console.log(evenNumber);


// const findNumber = numbers.find(x => x > 2);
// console.log(findNumber);