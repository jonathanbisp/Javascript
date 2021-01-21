function correta(value){
    value = value.toString().slice(0,4).replace('.',',')
    console.log( `R$${value}` ); 
}
correta(0.1+0.2)
bigint = 1n
let bigN = 351n ** 434n
console.log(bigN);