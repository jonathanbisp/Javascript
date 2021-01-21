function soma(){
    let soma = 0
    for( el in arguments){
        soma += arguments[el]
    }
    console.log(typeof(arguments));
    console.log(soma);
}
soma(1,2,3,4,5,6,7,8,9,10)

function subtração(...args) {
    console.log(args);
}
subtração(2,3,4,5)