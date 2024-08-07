//Menu Mobile
var btMobile = document.getElementById('bt-menu');

function toggleMenu() {
	var menu = document.getElementById('menu')
	menu.classList.toggle('active');
}

btMobile.addEventListener('click', toggleMenu);

//Bg Anime
$(document).ready(function(){
	$('.coding-animate').tilt({
		glare: true,
		maxGlare: .8,
		scale : 1.02,
		speed: 900
	})
})

// Fade Scroll Top
$(window).scroll(function(){
	if($(this).scrollTop() > 40 ) {
		$('.arrow-top').fadeIn();
	} else {
		$('.arrow-top').fadeOut();
	}
})

// Scroll suave
$('.menu').click(function(e){
	e.preventDefault();
	var id = $(this).attr('href'),
	menuHeight = $('nav').innerHeight(),
	targetOffset = $(id).offset().top;
	$('html, body').animate({
		scrollTop: targetOffset - menuHeight
	}, 500);
})

// Debounce do Lodash
debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// Animação ao Scroll
(function(){
	var $target = $('.anime'),
			animationClass = 'anime-start',
			offset = $(window).height() * 3/4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
	}, 100));
})();