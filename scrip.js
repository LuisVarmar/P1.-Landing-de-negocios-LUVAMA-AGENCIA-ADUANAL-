document.addEventListener('DOMContentLoaded', () => {
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const carousel = document.querySelector('.carousel-container');

    prev.addEventListener('click', () => {
        carousel.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    });

    next.addEventListener('click', () => {
        carousel.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    });
});
