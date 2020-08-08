const user = {
    id:1,
    name:"asikur", 
    lover:{
        name:"sadiya",
        phone:11000000,
        location: "USA"
    },
    phone:1823980517,
    friendAge: [25, 23, 24],
    friends: ["kamal", "jamal", "korim"]
    }
const userJSON = JSON.stringify(user);
console.log(userJSON)

const userFormJSON = JSON.parse(userJSON);
console.log(userFormJSON)