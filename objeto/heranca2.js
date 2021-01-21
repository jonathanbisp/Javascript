Object.prototype.attr0 = "Z"
const avo = {
    attr1: "A"
}
const pai = {
    __proto__: avo,
    attr2: 'B'
}
const filho = {
    __proto__: pai,
    attr3: 'C'
}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const Carro = {
    velAtual: 0,
    velMaxima: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMaxima) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMaxima
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMaxima}Km/h`
    }
}

const Ferrari = {
    modelo: 'F40',
    velMaxima: 324,
}

const Volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(Ferrari, Carro)
Object.setPrototypeOf(Volvo, Carro)


Ferrari.acelerarMais(210)
console.log(Ferrari.status());
Volvo.acelerarMais(110)
console.log(Volvo.status());
