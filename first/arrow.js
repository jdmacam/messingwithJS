// function add(a, b) {
//     return a + b
// }

let add = (a,b) => a+b

console.log(add(1,2))


class Guy{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    get myname(){
        return this.name
    }
}

let guy1 = new Guy('joe',28)
console.log(guy1.name)