window.addEventListener('load', () => {
    document.body.classList.remove('preload');
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.form__input').forEach((input) => {
        input.addEventListener('input', () => {
            input.className = input.className.replace(/form__input--error ?/, '');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav');

    document.querySelector('#btnNav').addEventListener('click', () => {
        nav.classList.add('nav--open');
    });

    document.querySelector('.nav__overlay').addEventListener('click', () => {
        nav.classList.toggle('nav--open');
    });
});