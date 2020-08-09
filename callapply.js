const Person = {
    firstName : "Asikur",
    lastName : "Rahaman",
    salary : 14900,
    getFullName : function () {
        console.log(this.firstName , this.lastName)
    },
    getSalary: function (amount , tax, tips) {
        this.salary = this.salary - amount -tax - tips;
        return this.salary;
    }
}

const heroPerson = {
    firstName : "Salman",
    lastName : "Khan",
    salary : 11900
}

const superHeroPerson = {
    firstName : "Chris",
    lastName : "Hemsworth",
    salary : 1114900
}

// const heroPersonBillCharge = Person.getSalary.bind(heroPerson);
// heroPersonBillCharge(900);
// console.log(heroPerson.salary)

// const superHeroFullName = Person.getFullName.bind(superHeroPerson);
// superHeroFullName()

// Person.getSalary.call(superHeroPerson, 14900, 500, 700);
// console.log(superHeroPerson.salary)

Person.getSalary.apply(heroPerson, [300,400,200])
console.log(heroPerson.salary)