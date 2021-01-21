const alunos = [
    {nome: 'Jonathan', nota: 10, bolsista: true},
    {nome: 'Samuel', nota: 9, bolsista: true},
    {nome: 'Jacira', nota: 8.5, bolsista: true},
    {nome: 'Vitória', nota: 4, bolsista: true}
]
//Desafio 1: Todos os alunos são bolsistas?
const d1 = alunos.map(a => a.bolsista).reduce(function(acu, atual){
    return (acu == false || atual == false) ? false : true
})
console.log(d1);

//Desafio 2: Algum aluno é bolsista?
const d2 = alunos.map(a => a.bolsista).reduce(function(acu, atual){
    return (acu == true || atual == true) ? true : false
})
console.log(d2);