const valor = "Global"

minhaFuncao = () => {
    console.log(valor)
}

function exec() {
    const valor = "Local"
    minhaFuncao()
}

exec()