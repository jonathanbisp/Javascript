console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Jonathan Bispo'.reverse());

Array.prototype.first = function (){
    return this[0]
}

Array.prototype.last = function() {
    return this[this.length-1]
}

console.log([1,2,3,4,5].first());
console.log([1,2,3,4,5].last());