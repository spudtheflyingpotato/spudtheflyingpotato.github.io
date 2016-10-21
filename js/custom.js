var resizeFunction = function(){
	var anchors = document.getElementsByClassName('change')
  	if(window.innerWidth < 590){
		anchors[0].innerHTML = 'Me'
		anchors[1].innerHTML = 'Lists'
		anchors[2].innerHTML = 'Faves'
		anchors[3].innerHTML = 'Contact'
  	}
	else {     
		anchors[0].innerHTML = 'A little more about me'
		anchors[1].innerHTML = 'Bucket List'
		anchors[2].innerHTML = 'Favourite things'
		anchors[3].innerHTML = 'Get in contact'
	}
}
  
window.addEventListener('resize', resizeFunction)

$(document).ready(function(){
	resizeFunction()
	$('.imagecarousel').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true
	});
	$(window).scroll(function() {
    	if ($(this).scrollTop() >= 100) {
        	$('#top').fadeIn("fast");       
    	} 
    	else {
        	$('#top').fadeOut("fast");      
    	}
	});
	$('#top').click(function() {            
    	$('body,html').animate({
        	scrollTop : 0                   
    	}, 500);
	});

	new Elevator({
		element: $('.elevator').get(0),
		mainAudio: 'audio/ding.mp3',
		endAudio: 'audio/elevator.mp3'
	});
});

// - Add jquery arrow to take you to 'next' section (MAYBE)
// defs want to add smooth scrolling
