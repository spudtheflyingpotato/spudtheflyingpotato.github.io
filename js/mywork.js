var resizeFunction = function(){
  var anchors = document.getElementsByClassName('change')
  if(window.innerWidth < 590){
    anchors[0].innerHTML = 'Docs'
    anchors[1].innerHTML = 'Articles'
    anchors[2].innerHTML = 'UI'
    anchors[3].innerHTML = 'Misc'
    anchors[4].innerHTML = 'Contact'
    }
  else {     
    anchors[0].innerHTML = 'Documentation'
    anchors[1].innerHTML = 'Articles'
    anchors[2].innerHTML = 'UI Copy'
    anchors[3].innerHTML = 'Everything Else'
    anchors[4].innerHTML = 'Contact'
    }
  }
  
window.addEventListener('resize', resizeFunction)

$(document).ready(function(){
	resizeFunction();
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
});
