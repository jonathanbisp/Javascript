Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Jonathan', 'Vitória', 'Bia', 'Samuel']
 
aprovados.forEach2((nome, index, array)=>{
    console.log(`${index+1}) ${nome}`);
})
