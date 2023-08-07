const person = {
    name: 'Anna',
    surname: 'Dance',
    age: 18,
    greeting() {
    console.log('Hello')
    },
    changeSurname(newName){
   this.name = newName;
   console.log('New name is: ' + newName)
    }
};
person.changeSurname('Sasha')

