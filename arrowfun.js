
const add = (x , y) => x * y;
console.log(add(5 , 6))

const give10 = () => 10;
console.log(give10());

const num = num => num * 5;
console.log(num(10));

const doMath = (x , y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

console.log(doMath(8 , 6))
