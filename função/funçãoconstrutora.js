function Carro(velocidadeMaxima = 200, delta = 5){
    // let = private
    let velocidadeAtual = 0

    // this = public
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima) velocidadeAtual += delta
        else velocidadeAtual = velocidadeMaxima
    }
    this.getValorAtual = function(){
        return velocidadeAtual
    }
}
uno = new Carro
uno.acelerar()
ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(uno.getValorAtual())
console.log(ferrari.getValorAtual());
Carro.prototype.ca = (a) => console.log(a);