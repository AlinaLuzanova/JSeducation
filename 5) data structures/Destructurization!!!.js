//
const cities = ['lenin', 'kuban', 'frogs']
const [ spb,
        sochi,
        ...tail
] = cities || []; //позволит программе не умереть, если был передан пустой массив
console.log(tail)


