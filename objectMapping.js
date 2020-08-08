const students = [
    {id:1, name:"asikur"},
    {id:2, name:"rahaman"},
    {id:3, name:"tuhin"},
    {id:4, name:"romana"},
    {id:5, name:"sadiya"}

]
// const studentName = []
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     studentName.push(element.name);
// }
// console.log(studentName)

// const names = students.map( x => x.name);
const fiterId = students.filter(i => i.id > 2)
console.log(fiterId)

const findId = students.find(i => i.id > 4)
console.log(findId)