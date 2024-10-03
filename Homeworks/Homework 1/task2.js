// Создание счетчика
// Напишите функцию createCounter, которая создает счетчик и возвращает объект с тремя методами: increment, decrement и getValue. Метод increment должен увеличивать значение счетчика на 1, метод decrement должен уменьшать значение счетчика на 1, а метод getValue должен возвращать текущее значение счетчика. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

// Подсказка: Функция createCounter возвращает объект с методами для увеличения и уменьшения счетчика. Приватная переменная count доступна только через методы объекта, что обеспечивает инкапсуляцию данных.

function createCounter(initialValue) {
    let count = 0;
    return {
        increment: function () {
            count += 1;
            return count;
        },
        decrement: function () {
            count -= 1;
            return count;
        },
        getValue: function () {
            return count;
        }
    }
}

const counter = createCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.getValue());

