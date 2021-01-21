function MeuObjeto(){}

console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__);
console.log(obj1.__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.__proto__ === Function.prototype);
console.log(Object.prototype.__proto__ === null);