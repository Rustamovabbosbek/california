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