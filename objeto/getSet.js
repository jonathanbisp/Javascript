const sequencia = {
    _valor: 1, // não deixa privado de verdade, mas por convenção ngm vai mexer nisso
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > _valor) {
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor)
