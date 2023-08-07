const dog = {
    name: 'Gloria',
    age: 4,
    color: 'dotted',
    weight : 10
    addAge() {
        this.age++;
        console.log(this);
    }
};
dog.addAge()
for (let prop in dog){
    console.log(prop, dog[prop])
}
const num = [34, 15, 88, 2]
for (let number of num){
    console.log(number)
}

