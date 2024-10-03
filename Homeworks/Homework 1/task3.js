// Рекурсивный поиск элемента по классу Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

// Подсказка: Функция findElementByClass рекурсивно обходит дерево DOM, начиная с корневого элемента. Она проверяет каждый элемент на наличие указанного класса и, если находит совпадение, возвращает его. Если элемент с нужным классом не найден, функция возвращает null.


function findElementByClass(root, className) {
    if (root.classList.contains(className)) {
        return root;
    }
    for (let i = 0; i < root.children.length; i++) {
        const found = findElementByClass(root.children[i], className);
        if (found) {
            return found;
        }
    }
    return null; // Если элемент с таким классом не найден
}


const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement); // Ожидаемый вывод: элемент с классом 'my-class', если найден
