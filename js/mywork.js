var resizePageMenuText = function () {
    var anchors = $('.change')
    if (window.innerWidth < 590) {
        anchors.eq(0).html('Docs');
        anchors.eq(1).html('Articles');
        anchors.eq(2).html('Misc');
        anchors.eq(3).html('Contact');
    }
    else {
        anchors.eq(0).html('Documentation');
        anchors.eq(1).html('Articles and Reviews');
        anchors.eq(2).html('Miscellaneous Things');
        anchors.eq(3).html('Get in contact');
    }
}

// Changes text on page resize
$(window).resize(function () {
    resizePageMenuText();
});

var elevatorScroll = function () {
    new Elevator({
        element: $('.elevator').get(0),
        mainAudio: '../audio/elevator.mp3',
        endAudio: '../audio/ding.mp3'
    });
}

var smoothScroll = function () {
    $.localScroll({ filter: '.smoothScroll' });
}

var divLinker = function () {
	/* Searches for an <a> tag inside the div and navigates 
	to the href of the <a> tag when the div is clicked */
    $(".linkDiv").click(function () {
        window.open($(this).find("a").attr("href"));
        return false;
    });
}

$(document).ready(function () {
    resizePageMenuText();
    elevatorScroll();
    smoothScroll();
    divLinker();
});