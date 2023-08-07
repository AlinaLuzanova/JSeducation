const average = function (a,b,c,d){
    return ((a+b+c+d)/4)
}

square = x => x**2;

muliply = (a,b) => {
    return a*b;
}
console.log(muliply(3,5))

checkAge = age =>{
    if (age>=18){
        return ('welcome')
    }
    else {
        return ('access denied')
    }
}

checkAge = age => age >= 18 ? 'welcome' : 'access denied'
