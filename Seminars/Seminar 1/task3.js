function createCalculator(initialValue) {
    let value = initialValue;
    return {
        add: function (num) {
            value += num
        },
        substract: function (num) {
            value -= num;
        },
        getValue: function () {
            return value;
        }
    }
}

const calculator = createCalculator(10);
calculator.add(5);
calculator.substract(3);
console.log(calculator.getValue());