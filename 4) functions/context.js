function print(){
    console.log(this)
}
//print()

const print2 = () => console.log(this)
//print2()

//setTimeout(()=>console.log('hello'), 1000)
//в следующем случае надо использовать именно стрелочную фугкцию
//иначе this сошлется на window
const cat = {
    name: 'Bugatti',
    say(){
       const greeting = () => console.log(this.name)
        setTimeout(greeting, 1000)
    },
}
cat.say()


const developer = {
    name: 'sasha',
    salary: 25000,
    getBonus(sum){
        console.log(this.name, 'has a salary this month ',this.salary+sum )
    }
}
developer.getBonus(250)


const manager = {
    name: 'anna',
    salary: 20000,
}