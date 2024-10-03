const createCounter = () => {
    let counter = 0;
    return () => {
        return ++counter;
    }
}
// Создаем счетчик.
const counter1 = createCounter();
counter1(); // 1
counter1(); // 2
//Создадим еще один счетчик. Каждый будет работать независимо.
const counter2 = createCounter();
counter2(); // 1
counter1(); // 3