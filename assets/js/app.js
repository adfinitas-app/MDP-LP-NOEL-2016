$(document).ready(function() {
	var x = ($(window).innerWidth() - $('#cta-video').innerWidth()) / 2;
	$('#cta-video').css({"right" : x + 'px'});
	x = ($(window).innerWidth() - $('#text-video').innerWidth()) / 2;
	$('#text-video').css({"right" : x + 'px'});
	$('#video-header').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() - $('#header').innerHeight() + 'px'});
	$('#container-video-header').css({height: $(window).innerHeight() - $('#header').innerHeight() + 'px'})




	var iframe1 = document.querySelector('#video-header');
	var player1 = new Vimeo.Player(iframe1);
	player1.on('play', function() {
		$('#text-video').hide();
	});
});

$(window).resize(function() {

});









