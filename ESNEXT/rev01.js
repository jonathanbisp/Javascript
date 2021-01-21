// let const
{
    var a = 2
    let b = 3
    console.log(b);   
}
console.log(a);

// template string
const produto = 'Arroz'
console.log(`${produto} é barato`);

// destructuring

const [l, e, ...tras] = "coder"
console.log(l,e,tras);

const [x, , z] = [1, 2, 3]
console.log(x, z);

const {nome: n, idade} = {idade: 13,nome: 'ana'}
console.log(n, idade);