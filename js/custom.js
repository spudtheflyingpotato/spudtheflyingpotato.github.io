var resizePageMenuText = function () {
	var anchors = $('.change')
	if (window.innerWidth < 590) {
		anchors.eq(0).html('Me');
		anchors.eq(1).html('List');
		anchors.eq(2).html('Faves');
		anchors.eq(3).html('Contact');
	}
	else {
		anchors.eq(0).html('A little more about me');
		anchors.eq(1).html('Things I want to do');
		anchors.eq(2).html('My favourite things');
		anchors.eq(3).html('Get in contact');
	}
}

// Changes text on page resize
window.addEventListener('resize', resizePageMenuText)

var imageCarousel = function () {
	$('.imagecarousel').slick({
		dots: true,
		infe: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true
	});
}

var elevatorScroll = function () {
	new Elevator({
		element: $('.elevator').get(0),
		mainAudio: 'audio/elevator.mp3',
		endAudio: 'audio/ding.mp3'
	});
}

var smoothScroll = function () {
	$.localScroll({ filter: '.smoothScroll' });
}

var divLinker = function () {
	/* Searches for an <a> tag inside the div and navigates 
	to the href of the <a> tag when the div is clicked */
	$(".linkDiv").click(function () {
		window.location = $(this).find("a").attr("href");
		return false;
	});
}

$(document).ready(function () {
	resizePageMenuText();
	imageCarousel();
	elevatorScroll();
	smoothScroll();
	divLinker();
});

