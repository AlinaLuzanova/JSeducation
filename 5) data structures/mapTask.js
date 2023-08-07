//это коллекция - массив с непримитивными элементами
const developers = [
    {
        id: 1,
        fullName: 'Anton Petrov',
        skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'React'],
        salary: 1000,
    },
    {
        id: 2,
        fullName: 'Ivan Ivanov',
        skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'Vue'],
        salary: 950,
    },
    {
        id: 3,
        fullName: 'Albert Sidorov',
        skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'jQuery'],
        salary: 850,
    },
];

function qual(person){
    return {
        ...person,
        salary: person.salary + 500,
        skills: [...person.skills, 'TypeScript']
    }
}
const middleDevelopers = developers.map(qual)
console.log(middleDevelopers)