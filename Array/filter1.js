const nums = [0,1,2,3,4,5,6,7,8,9]

const even = nums.filter(value => {
    return value%2 == 0
})
const odd = nums.filter(value=> {
    return value%2 != 0
})

console.log(even);
console.log(odd);