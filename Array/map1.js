const nums = [1,2,3,4,5]

const soma10 = v => v + 10
const triplo = v => v * 3
const paraDinheiro = v => `R$ ${parseFloat(v).toFixed(2).replace('.', ',')}`
const resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado);