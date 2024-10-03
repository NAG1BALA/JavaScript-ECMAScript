const calculator = {
    add(a, b) {
        return a + b;
    },
    substract(a, b) {
        return a - b;
    },
    mult(a, b) {
        return a * b;
    }
}

console.log(calculator.add.call(null, 5, 3));
console.log(calculator.substract.apply(null, [5, 3]));