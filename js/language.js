// Language Buttons
const langBt = document.querySelector('.language-bt');
const buttons = document.querySelectorAll('.flag');
// Text Changes
const mainTitle = document.querySelector('.top-line');
const subTitle = document.querySelector('.bottom-line');

buttons.forEach( button => {
    button.addEventListener('click', () => {
        langBt.querySelector('.active').classList.remove('active');
        button.classList.add('active');

        const attr = button.getAttribute('data');

        mainTitle.textContent = data[attr].title;
        subTitle.textContent = data[attr].subtitle;
    });
});

const data = {
    'brazil': {
        'title': 'Desenvolvedor Web',
        'subtitle': 'Criando sites com maestria!'
    },
    'english': {
        'title': 'Web Developer',
        'subtitle': 'Creating websites with mastery'
    }
}