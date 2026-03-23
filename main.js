const title = document.querySelector('.into_banner_info_title');
const text = "The new phones are here \n take a look.";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        // Если попадается символ переноса строки \n, ставим <br>
        if (text.charAt(i) === "\n") {
            title.innerHTML += "<br>";
        } else {
            title.innerHTML += text.charAt(i);
        }
        i++;
        setTimeout(typeWriter, 100); // Скорость печати (100мс)
    }
}

// Очищаем заголовок перед началом, чтобы он не дублировался
title.innerHTML = '';
// Запускаем анимацию
typeWriter();   

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Когда зашли в секцию — добавляем класс
            entry.target.classList.add('appeared');
        } else {
            // Когда ушли из секции — убираем класс (анимация сбросится)
            entry.target.classList.remove('appeared');
        }
    });
}, { 
    threshold: 0.1 // Сработает, как только покажется край карточки
});

document.querySelectorAll('.animate-card').forEach(card => {
    observer.observe(card);
});