function Produto(nome, preço){
    return {
        nome,
        preço,
        desconto: 0.1
    }
}
arroz = Produto('Arroz', 3.85)


function Pessoa(nome){
    this.nome = nome

    this.falar = function(){
            console.log(`Meu nome é ${this.nome}`);
    }
    
}

const kleber = new Pessoa('Kleber')
kleber.falar()