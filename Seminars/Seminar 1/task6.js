function sumDigits(num) {
    if (num < 10) {
        return num;
    }
    return num % 10 + sumDigits(Math.floor(num / 10));
}

console.log(sumDigits(123)); // 6 (1+2+3)
console.log(sumDigits(456789)); // 39 (4+5+6+7+8+9)