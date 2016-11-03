$(document).ready(function() {
	$( "#progressbar" ).progressbar({
		value: 37
	});
	var iframe1 = document.querySelector('#video-header');
	var player1 = new Vimeo.Player(iframe1);
	player1.on('play', function() {
		$('#text-video').hide();
	});
	adaptVideo();
	adaptHeader();
});

$('#cta-video').click( function() {
	$('html').css({"overflow" : "visible", "height": "auto"});
	$('body').css({"overflow" : "visible", "height": "auto"});
	scrollTo("#slide-don");
});

$(window).resize(function() {
	adaptVideo();
});

function adaptVideo() {
	var x = ($(window).innerWidth() - $('#cta-video').innerWidth()) / 2;
	$('#cta-video').css({"right" : x + 'px'});
	x = ($(window).innerWidth() - $('#text-video').innerWidth()) / 2;
	$('#text-video').css({"right" : x + 'px'});
	$('#video-header').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() - $('#header').innerHeight() + 'px'});
	$('#container-video-header').css({height: $(window).innerHeight() - $('#header').innerHeight() + 'px'})
}

function adaptHeader() {

}

function 	scrollTo(next){
	if ($(next).length != 0)
	{
		$('html, body').stop().animate({
			scrollTop: $(next).offset().top + 1
		}, 700, 'swing');
		return false;
	}
};

$('#img-plus1').click( function() {
	$('#text-portrait-1-1').slideToggle( "slow", function() {
		$('#img-plus1').hide();
	});
	$('#text-portrait-1-2').slideToggle( "slow", function() {
		$('#img-moins1').show();
	});
})

$('#img-moins1, #img-moins1-small').on('click', function() {
	$('#text-portrait-1-2').slideToggle( "slow", function() {
		$('#img-moins1').hide();
	});
	$('#text-portrait-1-1').slideToggle( "slow", function() {
		$('#img-plus1').show();
	});
});

$('#img-plus2').click( function() {
	$('#img-plus2').hide();
	$('#text-portrait-2-1').slideToggle( "slow", function() {
	});
	$('#text-portrait-2-2').slideToggle( "slow", function() {
		$('#img-moins2').show();
	});
})

$('#img-moins2, #img-moins2-small').on('click', function() {
	$('#text-portrait-2-2').slideToggle( "slow", function() {
		$('#img-moins2').hide();
	});
	$('#text-portrait-2-1').slideToggle( "slow", function() {
		$('#img-plus2').show();
	});
})

$('#img-plus3').click( function() {
	$('#img-plus3').hide();
	$('#text-portrait-3-1').slideToggle( "slow", function() {
	});
	$('#text-portrait-3-2').slideToggle( "slow", function() {
		$('#img-moins2').show();
	});
})

$('#img-moins3, #img-moins3-small').on('click', function() {
	$('#text-portrait-3-2').slideToggle( "slow", function() {
		$('#img-moins2').hide();
	});
	$('#text-portrait-3-1').slideToggle( "slow", function() {
		$('#img-plus2').show();
	});
})









