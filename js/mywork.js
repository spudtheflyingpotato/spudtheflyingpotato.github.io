var resizeFunction = function(){
  var anchors = document.getElementsByClassName('change')
  if(window.innerWidth < 590){
    anchors[0].innerHTML = 'Docs'
    anchors[1].innerHTML = 'Articles'
    anchors[2].innerHTML = 'Misc'
    anchors[3].innerHTML = 'Contact'
    }
  else {     
    anchors[0].innerHTML = 'Documentation'
    anchors[1].innerHTML = 'Articles'
    anchors[2].innerHTML = 'Everything Else'
    anchors[3].innerHTML = 'Contact'
    }
  }
  
window.addEventListener('resize', resizeFunction)

$(document).ready(function(){
	resizeFunction();
    new Elevator({
		element: $('.elevator').get(0),
		mainAudio: 'audio/elevator.mp3',
		endAudio: 'audio/ding.mp3'
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
  $(".linkDiv").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});
});
