Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0; i  < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 1.50}',
    '{"nome": "Caderno", "preco": 18.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 4.50}'
]

const paraObjeto = json => JSON.parse(json)
const paraPreco = objeto => objeto.preco

const precos = carrinho.map2(paraObjeto).map2(paraPreco)
console.log(precos);