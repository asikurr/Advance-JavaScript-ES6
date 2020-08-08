const num = [1,2,3,41,54,61,7,8,91,22,33];
// const sliceNum = num.slice(1,5);

// const remove = num.splice(1,3 , 42)
// console.log(num)
// console.log(remove)

const togather = num.join(" - ")
console.log(togather)

function doSomething(x, y = 4){ 
    console.log(y);
}
doSomething(3,2)