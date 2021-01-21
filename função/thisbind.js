const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()

const falar = pessoa.falar
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
pessoa.saudacao = 'Boa tarde'
falarDePessoa()

console.log(typeof(pessoa));
class pessoas {

}
p1 = new pessoas
console.log(typeof(pessoas))
console.log(p1);