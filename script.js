$(window).scroll(function() {
	parallax();
})

function parallax() {
	var wScroll = $(window).scrollTop();

	$('.parallax-bg').css('background-position', 'center ' + (wScroll*0.2) + 'px');
}

/* Alternate method
const parallax = document.getElementById("header");

window.addEventListener("scroll", function() {
	let offset = window.pageYOffset;
	parallax.style.backgroundPositionY = offset * 0.2 + "px";
})

*/