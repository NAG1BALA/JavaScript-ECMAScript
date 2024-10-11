function changeStyleDelayed(elementId, delay) {
    setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
            element.style.color = 'black';
        }
    }, delay);
}

changeStyleDelayed('myElement', 2000);
