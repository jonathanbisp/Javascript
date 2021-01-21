const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')
axios.get(url).then(response => {
    const funcionarios = response.data

    const Chineses = funcionarios.filter(chines).filter(mulher).reduce(menorSalario)
    console.log(Chineses)
}).catch(e => console.log(e))

const chines = function (funcionario) {
    return funcionario.pais === 'China'
}

const mulher = function (funcionario){
    return funcionario.genero === 'F'
}

const menorSalario = function(funcionarioAnterior, funcionarioAtual){
    if (funcionarioAnterior.salario <= funcionarioAtual.salario) return funcionarioAnterior
    return funcionarioAtual
}