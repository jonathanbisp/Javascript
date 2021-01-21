const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var nome
r1.question('Qual o seu nome?', res => {
    console.log(res);
    
    r1.close()
})

console.log(nome)