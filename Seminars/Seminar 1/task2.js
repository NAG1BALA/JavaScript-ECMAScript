function getEvenNumbers(num) {
    return num.filter(item => item % 2 === 0)
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));


function calculateAverage(num) {
    const sum = num.reduce((acc, item) => acc + item, 0)
    return sum / num.length
}

console.log(calculateAverage([1, 2, 3]));


function capitalizeFirstLetter(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

}


console.log(capitalizeFirstLetter('hello world')); 