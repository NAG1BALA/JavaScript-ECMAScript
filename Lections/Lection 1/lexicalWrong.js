const houses = [];
let i = 0;
while (i < 10) {
    let house = function () { // функция «дом»
        console.log(i); // выводит номер дома
    };
    houses.push(house);
    i++;
}
houses[0](); // 10 — у нулевого дома номер 10
houses[7](); // 10 — и у седьмого дома номер 10


let house = function () { // функция «дом»
    // лексическое окружение: { i: 10 }
    console.log(i); // выводит номер дома
};


