// usando notação literal

const obj1 = {}
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object
console.log(obj2);

// funções construtoras
function Produto(nome, preço, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preço * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 2, 0.15)
const p2 = new Produto('Papel', 18, 0.10)

// Função factory

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Kleber', 2500, 3)
console.log(f1.getSalario(), typeof f1);

// Object create
const filha = Object.create(null)
filha.nome = 'Vitoria'
console.log(filha);

// class
class Retangulo {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }
    get Area() {
        return this.calculaArea()
    }

    calculaArea() {
        return this.largura * this.altura
    }
}

const Quadrado = new Retangulo(10, 10)
console.log(Quadrado.Area, Quadrado.altura);

// Uma função que retorna um objeto

const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON); 
