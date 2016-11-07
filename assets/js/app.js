$(document).ready(function() {
	var campaigns = [];
	campaigns[0] = 35;
	$.ajax({
		type: "GET",
		data: { 
			"user_api": "umdpapi", 
			"pwd_api": "drR3tmYQ"
		},
		url:"https://donner.miedepain.asso.fr/api/counter/get",
		success:function(data){
			console.log(data);
		},
		error: function (request, error) {
			console.log(JSON.parse(JSON.stringify(request)));
			console.log(JSON.parse(JSON.stringify(arguments)));
			console.log("error == " + error);
		}
	});





	$( "#progressbar" ).progressbar({
		value: 37
	});


	var iframe1 = document.querySelector('#video-header');
	var player1 = new Vimeo.Player(iframe1);
	player1.on('play', function() {
	});
	player1.on('timeupdate', function(data) {
		if (parseInt(data['seconds']) > 135)
			$('#cta-video').show();
		else {
			$('#cta-video').hide();
		}
	});



	adaptVideo();
	height_pb_adjust();
});

$(window).resize(function() {
	adaptVideo();
	height_pb_adjust();
});

$('#cta-video').click( function() {
	$('html').css({"overflow" : "visible", "height": "auto"});
	$('body').css({"overflow" : "visible", "height": "auto"});
	scrollTo("#slide-don");
});

function 	height_pb_adjust()
{
	var 	maxheight;

	$(".price-block > div").css("height", "auto");
	maxheight = $(".price-block > div").first().height();
	$(".price-block > div").each(function()
	{
		if ($(this).height() > maxheight)
			maxheight = $(this).height();
	});
	maxheight = (maxheight + 80) + "px";
	if ($(window).width() > 640)
		$(".price-block > div").css("height", maxheight);
}

function adaptVideo() {
	var x = ($(window).innerWidth() - $('#cta-video').innerWidth()) / 2;
	var y = ($(window).innerHeight() - $('#cta-video').innerHeight()) / 2;
	$('#cta-video').css({"right" : x + 'px'});
	$('#cta-video').css({"bottom" : y + 'px'});




	x = ($(window).innerWidth() - $('#text-video').innerWidth()) / 2;
	$('#text-video').css({"right" : x + 'px'});
	$('#video-header').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() - $('#header').innerHeight() + 'px'});
	$('#container-video-header').css({height: $(window).innerHeight() - $('#header').innerHeight() + 'px'})
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

$("#chevron-bg-left").click( function() {
	scrollTo('.slide-portrait');
});

$('#chevron-slide-coeur').click( function() {
	scrollTo('#don-ampleur');
});

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









