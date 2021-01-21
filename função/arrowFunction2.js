let comparaComThisArrow = param => console.log(this == param)
comparaComThisArrow(module.exports)
console.log(this)
ad = {}
console.log(ad);
comparaComThisArrow(ad)
comparaComThisArrow = comparaComThisArrow.bind(ad)

comparaComThisArrow(ad)