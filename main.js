// Оставляем только ОДИН экземпляр наблюдателя
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Когда зашли в секцию — плавно показываем
            entry.target.classList.add('appeared');
        } else {
            // Когда ушли далеко — сбрасываем (без тряски)
            // Мы убираем класс только если элемент реально ушел с экрана
            const rect = entry.boundingClientRect;
            if (rect.top > window.innerHeight || rect.bottom < 0) {
                 entry.target.classList.remove('appeared');
            }
        }
    });
}, { 
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px' // Увеличил отступ, чтобы точно не трясло
});

// Запускаем слежку за всеми карточками
document.querySelectorAll('.animate-card').forEach(card => {
    observer.observe(card);
});