jQuery(function (){
	   window.onscroll = function () {
            var scrolled = window.pageYOffset || document.documentElement.scrollTop;
            if (scrolled > 100) {
                alert('scrolled > 100 and scrcolled for ' + scrolled);
             //   scrollTopButton.fadeIn();
            } else {
                alert('srcolled for ' + scrolled);
             //   scrollTopButton.fadeOut();
            }
            if (scrolled >= 700) {
                alert('scrolled >= 700 and scrcolled for ' + scrolled);
              //  scrollBackButton.fadeOut();
            }
        };
});
