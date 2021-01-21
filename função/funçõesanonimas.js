const soma = function(x, u) {
    return x + u
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b));
}
imprimirResultado(3,4)
imprimirResultado(10,8, (x, y) => x - y)