function random(minimum, maximum) {
	return Math.floor(Math.random()*(maximum-minimum+1))+minimum;
};

function makeDoggos(amount=1, size=400) {
	for (var i = 0; i < amount; i++) {
		var x = random(0, $(window).width()-size);
		var y = random(0, $(window).height()-size);
		var doggo = "<div class='doggo' style='top: " + y + "px; left: " + x + "px; height: " + size + "px; width: " + size + "px; background-image: url(doggo" + random(0,2) + ".png);'></div>";
		$("body").append(doggo);
	};

  $(".clear").click(function(){
    $(".doggo").remove();

  });
};
