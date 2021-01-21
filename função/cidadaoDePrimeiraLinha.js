// forma literal
function f1(){ }

// armazenar em variavel
const f2 = function () { }

// armazenar em array
const array_de_funções = [function (a,b){return a + b}, function (a,b){return a-b}, f1, f2]
console.log(array_de_funções[0](10,2));

// armazenar em atributo de objeto objetos
const obj = {}
obj.falar = function (){return 'Olá'}
console.log(obj.falar());

// passar função com param
function f3(fun){
    if(typeof(fun)=='function') console.log(fun());
}
f3(obj.falar)

//funções podem retornar/conter outras funções
function f4(a,b){
    return function (c){
        return f4(a,b)(c)
    }
}
console.log(f4(5,3)(4));