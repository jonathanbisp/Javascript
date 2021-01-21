// Object.preventExtensions
// Não permite aumentar o número de atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promo'
})
console.log(produto);
console.log('Extensivel:', Object.isExtensible(produto));

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto);

// Object.seal
// Não consegue adicionar nem remover atributos, mas consegue modificar
const pessoa = {nome: 'Vitória', idade: 18}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa));

pessoa.sobrenome = 'Alves'
delete pessoa.nome
pessoa.idade = 19
console.log(pessoa);

// Object.freeze
// Não consegue modificar nenhum atributo nem adicinar ou remover

const jonathan = {nome: 'Jonathan', idade:18}
Object.freeze(jonathan)
console.log('Congelado:', Object.isFrozen(jonathan));
delete jonathan.idade
jonathan.idade = 19
jonathan.sobrenome = 'Bispo'
console.log(jonathan);

class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    static metodoClasse(){
        console.log(this.nome, 'Método da classe');
    }

    metodoInstancia(){
        console.log(this.nome);
    }
}

const Jonathan = new Pessoa('Jonathan', 18)
const Vitoria = new Pessoa('Vitoria', 19)
