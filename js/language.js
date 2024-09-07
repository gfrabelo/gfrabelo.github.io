// Language Buttons
const langBt = document.querySelector('.language-bt');
const buttons = document.querySelectorAll('.flag');
// Text Changes
const mainTitle = document.querySelector('.top-line');
const subTitle = document.querySelector('.bottom-line');
const aboutNav = document.querySelector('.about');
const skillsNav = document.querySelector('.skills');
const contactNav = document.querySelector('.contact');
const aboutTitle = document.querySelector('.about-title');
const aboutTxtP1 = document.querySelector('.about-text-p1');
const aboutTxtP2 = document.querySelector('.about-text-p2');
const aboutTxtP3 = document.querySelector('.about-text-p3');
const skillsTitle = document.querySelector('.skill-title');
const contactTitle = document.querySelector('.contact-title');
const contactText = document.querySelector('.contact-text');

// Change Language on Click
buttons.forEach( button => {
    button.addEventListener('click', () => {
        langBt.querySelector('.active').classList.remove('active');
        button.classList.add('active');
        // Get attribute Language
        const attr = button.getAttribute('language');
        // Change text content by Array
        mainTitle.textContent = data[attr].title;
        subTitle.textContent = data[attr].subtitle;
        aboutNav.textContent = data[attr].about;
        skillsNav.textContent = data[attr].skills;
        contactNav.textContent = data[attr].contact;
        aboutTitle.textContent = data[attr].aboutTitle;
        aboutTxtP1.textContent = data[attr].aboutTxt1;
        aboutTxtP2.textContent = data[attr].aboutTxt2;
        aboutTxtP3.textContent = data[attr].aboutTxt3;
        skillsTitle.textContent = data[attr].skillsTitle;
        contactTitle.textContent = data[attr].contactTitle;
        contactText.textContent = data[attr].contactText;
    });
});

// All Texts
const data = {
    'brazil': {
        'title': 'Desenvolvedor Web',
        'subtitle': 'Criando sites com maestria!',
        'about': 'Sobre',
        'skills': 'Habilidades',
        'contact': 'Contato',
        'aboutTitle': 'Sobre Mim',
        'aboutTxt1': 'Olá, meu nome é Gabriel Rabelo, moro em São Paulo e há 7 anos me aventuro no incrível mundo da programação! Apaixonado desde a infância pelas infinitas possibilidades de criação que a tecnologia oferece. Sou fascinado por tornar a ciência e o conhecimento mais acessíveis, contribuindo para um mundo melhor.',
        'aboutTxt2': 'Tive a oportunidade de trabalhar em projetos para empresas renomadas como Nike, Jequiti e Crackle. Além da minha experiência corporativa, também atuei como desenvolvedor freelancer, onde criei Landing Pages e Sites com altas taxas de conversão.',
        'aboutTxt3': 'Estou sempre buscando aprender mais, pois o mundo da tecnologia pode nos trazer infinitas possibilidades de criação. Me divirto fazendo isso e busco construir softwares que ofereçam ótimas experiências para meus futuros clientes!',
        'skillsTitle': 'Habilidades',
        'contactTitle': 'Entre em contato',
        'contactText': 'Gostou do que viu? Vamos trabalhar juntos! Sinta-se a vontade para entrar em contato comigo:'
    },
    'english': {
        'title': 'Web Developer',
        'subtitle': 'Creating websites with mastery!',
        'about': 'About',
        'skills': 'Skills',
        'contact': 'Contact',
        'aboutTitle': 'About Me',
        'aboutTxt1': 'Hello, my name is Gabriel Rabelo, I live in São Paulo, and I have been exploring the amazing world of programming for 7 years! I have been passionate about the endless possibilities that technology offers since childhood. I am fascinated by making science and knowledge more accessible, contributing to a better world.',
        'aboutTxt2':'I’ve had the opportunity to work on projects for renowned companies like Nike, Jequiti, and Crackle. In addition to my corporate experience, I have also worked as a freelance developer, creating Landing Pages and Websites with high conversion rates.',
        'aboutTxt3':'I am always eager to learn more because the world of technology offers infinite possibilities for creation. I have fun doing it and strive to build software that provides great experiences for my future clients!',
        'skillsTitle': 'Skills',
        'contactTitle': 'Get in touch',
        'contactText': "Did you like what you saw? Let's work together! Feel free to get in touch with me:"
    }
}