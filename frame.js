function openWindow(id, src, srcArray) {
   var winClose = $('.frame-window-header .close-icon');
	// var current = $('.image-container').children('img').attr('src');
	// var number = $.inArray(current, srcArray);

    $('.frame-window').css('display', 'block');
    show(id, src);

    winClose.bind('click', function() {
        close();
    });
	
	$('.nextButton').bind('click', function() {
        var pager = new FramePager(srcArray);
        pager.nextStep();
  });
	
	$('.backButton').bind('click', function() {
        var pager = new FramePager(srcArray);
        pager.prevStep();
	});
}

var show = function(id, src) {
	var container = $('.image-container'),
			title = $('.frame-window-header .title');

	title.html(src).attr('href',src);
	container.html('<img src = "' + src + '" id = "' + id + '"/>');
	return this;
};


var close = function() {
	$('.frame-window').css('display', 'none');
	var container = $('.image-container');

	container.empty();
	return this;
};
