const stars = document.querySelectorAll('.starBtn');

stars.forEach((star, index) => {
    // 1. Наведение мыши
    star.addEventListener('mouseover', () => {
        highlightStars(index);
    });

    // 2. Уход мыши (все тухнут)
    star.addEventListener('mouseleave', () => {
        resetStars();
    });

    // 3. Клик (чтобы зафиксировать рейтинг)
    star.addEventListener('click', () => {
        // Можно добавить логику сохранения выбора
        console.log(`Вы поставили оценку: ${index + 1}`);
    });
});

function highlightStars(index) {
    stars.forEach((star, i) => {
        if (i <= index) {
            star.classList.add('active');
            star.textContent = '★'; // Меняем контурную звезду на закрашенную
        } else {
            star.classList.remove('active');
            star.textContent = '☆';
        }
    });
}

function resetStars() {
    stars.forEach(star => {
        star.classList.remove('active');
        star.textContent = '☆';
    });
}