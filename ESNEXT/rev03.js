// ES8 Object.values/ Object.entries
const obj = {a: 1, b:2, c:3}
console.log(Object.values(obj));
console.log(Object.entries(obj));

// Melhorias na notação literal
const nome = 'Maria'
const Pessoa = {
    nome,
    ola(){
        console.log(this.nome);
    }
}
Pessoa.ola()

// classe
class Animal{
    

    falar() {
        return 'Fala de animal';
    }

    comer() {
        return 'Comendo como um animal'
    }
}
class Cachorro extends Animal{
    falar() {
        return 'Au Au!'
    }
}

dog = new Cachorro
console.log(dog.falar());
console.log(dog.comer());