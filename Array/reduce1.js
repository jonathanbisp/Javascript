const alunos = [
    {nome: 'Jonathan', nota: 10, bolsista: true},
    {nome: 'Samuel', nota: 9, bolsista: false},
    {nome: 'Jacira', nota: 8.5, bolsista: true},
    {nome: 'Vitória', nota: 4, bolsista: false}
]
const total = alunos.map(aluno => aluno.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual);
    return acumulador + atual
})
console.log(total);