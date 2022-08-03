function double(arr){
    return arr.map(val => val*2)
}

function squareEven(nums){
    let squares = nums.map(num => num ** 2)
    let evens = squares.filter(num => num % 2 === 0)
    return evens
}