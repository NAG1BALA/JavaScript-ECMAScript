function createPasswordChecker(maxLength) {
    return function (password) {
        return password.length < maxLength;
    }
}

const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password')); // false
console.log(isPasswordValid('secret'));