const produto = new Object

produto.nome = 'cadeira'
produto['marca do produto'] = 'generica'
produto.preço = 220
console.log(produto);

delete produto.preço
delete produto['marca do produto']
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereço: {
            logradouro: 'Rua ABC',
            numero: 12
        }
    },
    condutores: [{
        nome: 'Juniar',
        idade: 18
    },{
        nome: 'Ana',
        idade: 42
    }],
    calcularValorDoSeguro(){
        // ...
    }
}

carro.proprietario.endereço.numero = 17
carro['proprietario']['endereço']['logradouro'] = 'Rua Muito Louca'