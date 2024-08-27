const langBt = document.querySelector('.language-bt');
const buttons = document.querySelectorAll('.flag');

buttons.forEach( button => {
    button.addEventListener('click', () => {
        langBt.querySelector('.active').classList.remove('active');
        button.classList.add('active');
    });
});