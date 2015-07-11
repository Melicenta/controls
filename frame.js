function openWindow(id, src, srcArray) {
   var winClose = $('.frame-window-header .close-icon');


    $('.frame-window').css('display', 'block').draggable({
  		addClasses: false,
  		handle: ".frame-window-header"
  	});

    show(id, src); //adding current image to the frame

    winClose.bind('click', function() {
        close();
    });// close button
	
	$('.nextButton').bind('click', function() {
        var pager = new FramePager(srcArray);
        pager.nextStep();
  }); //forward buttin
	
	$('.backButton').bind('click', function() {
        var pager = new FramePager(srcArray);
        pager.prevStep();
	});//backward button

};

var show = function(id, src) {
	var container = $('.image-container'),
			title = $('.frame-window-header .title');

	title.html(src).attr({
		  href: src,
		  target: 'blank'
	});

	container.html('<img src = "' + src + '" id = "' + id + '"/>');
	return this;
};


var close = function() {
	$('.frame-window').css('display', 'none');
	var container = $('.image-container');

	container.empty();
	
	return this;
};
