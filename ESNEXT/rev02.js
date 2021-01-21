//arrow function
const soma = (a, b) => a + b

console.log(soma(2, 3));

//arrow function (this)
const lexico1 = () => console.log(this===exports);
lexico1()

//default params
function log(txt = 'NodeJs'){
    console.log(txt);
}
log()
log('Sou mais forte')

// rest operator

const total = (...numeros) => {
    let total = 0
    numeros.forEach(n => total += n)
    return total 
}

console.log(total(1,3,5,4,2));
