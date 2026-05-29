import './style.scss';

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

function highlightStars(index) { //Подсвечиваем желтым и увеличиваем звезды
    stars.forEach((star, i) => {
        if (i <= index) {
            star.classList.add('rating__star-btn--active');
            star.textContent = '★'; // Меняем контурную звезду на закрашенную
        } else {
            star.classList.remove('rating__star-btn--active');
            star.textContent = '☆';
        }
    });
}

function resetStars() { //Удаляем подсветку звезд
    stars.forEach(star => {
        star.classList.remove('rating__star-btn--active');
        star.textContent = '☆';
    });
}