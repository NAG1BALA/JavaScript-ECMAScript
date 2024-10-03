function createGreeting(user) {
    return function () {
        console.log(`Hello ${user}!`);
    }
}

const greeting = createGreeting('John');
greeting(); // 'Hello John'