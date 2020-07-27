document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.form__input').forEach((input) => {
        input.addEventListener('input', () => {
            input.className = input.className.replace(/form__input--error ?/, '');
        });
    });
});