const axios = require('axios').default
const fs = require('fs')

const url = 'http://www.centralmidi.net/demo/'

axios.get(url).then(response => {
    let data = response.data
    data.split('href=')
    data = response.data.split('>')
    const newArray = []
    for(value of data){
        if(value.endsWith('.mid"') || value.endsWith('.MID"')){
            value = value.replace('<a href="','')
            value = value.split('_')
            value = value.join(' ')
            value = value.replace('.mid"', '')
            value = value.replace('.MID"', '')
            newArray.push(value)
        } 
    }

    const Cantores = (newArray.map((value) =>{
        return value.split('-')[0]
    }))

    const cantoresUnicos = new Set(Cantores)
    const cantoresUnicosObj = {}
    cantoresUnicos.forEach((nome) => {
        cantoresUnicosObj[nome.trim()] = []
    })

    for(let chave of Object.keys(cantoresUnicosObj)){
        for(let value of newArray){
            let splitado = value.split('-')
            if(splitado[0] === chave){
                console.log(splitado);
                splitado.shift()
                splitado = splitado.join(' ')
                splitado = splitado.trim()
                cantoresUnicosObj[chave].push(splitado)
            }
        }
    }


    fs.writeFileSync('./musicas.json', JSON.stringify(cantoresUnicosObj))
})