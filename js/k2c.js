var k2c = {

}
var scenes = [
	{
		id:"#scene1",
		height:1
	},
	{
		id:"#scene2",
		height:2
	},
	{
		id:"#scene3",
		height:2
	},
	{
		id:"#scene4",
		height:3
	}
	,
	{
		id:"#scene5",
		height:2
	}
	,
	{
		id:"#scene6",
		height:2
	},
	{
		id:"#scene7",
		height:2
	}
];
var top_gap = 0.35;

$(document).ready(function($) {

	/*$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});*/
	var full_height = 0;
	var topper = 0;
	var inti;
	var inti_tongle = false;
	var direction = 1;

	$("body").on("mousedown", function(e){
			console.log($(e.target));
	});
	
	$("#logo").click(function(e){
		if(!inti_tongle){
			topper = $(document).scrollTop();
			console.log(topper);
			inti = setInterval(function(){
				$('html, body').scrollTop(topper);
				topper += 10*direction;
				console.log(topper);
				if(topper > full_height){
					direction = -1;
				}
				if(topper < 0){
					direction = 1;
				}

			}, 30);
		}else{
			clearInterval(inti);
		}
		inti_tongle = !inti_tongle;
		
	});

	var menu_state = false;
	function init_menu(){
		var mw = $("#menu-container ul").width();

		$("#menu-container ul").css({marginLeft:-mw});
		$("#menu-butt").click(function(e){
			if(!menu_state){
				TweenMax.to("#menu-container ul", .6, {css:{marginLeft:0}, ease:Sine.easeOut});
				TweenMax.to("#menu-butt", .6, {rotation:90, ease:Sine.easeOut});
			}else{
				TweenMax.to("#menu-butt", .6, {rotation:0, ease:Sine.easeOut});
				var mw = $("#menu-container ul").width();
				TweenMax.to("#menu-container ul", .6, {css:{marginLeft:-mw}, ease:Sine.easeIn});
			}
			menu_state = !menu_state;
		});	
	}
	init_menu();

	k2c.controller = new ScrollMagic();
	
	var windowHeight = 0;
	var windowWidth = 0;
	var mobile = false;

	function resizer(e) {
		windowHeight = $(window).innerHeight();
		windowWidth = $(window).innerWidth();
		positionElements();
		if(windowWidth < 880 || windowHeight < 550){
			if(!mobile){
				$("body").removeClass("size-l");
				$("body").addClass("size-s");
				mobile = true;
			}
		}else if(mobile){
			$("body").removeClass("size-s");
			$("body").addClass("size-l");
			mobile = false;
		}

	}
	resizer();
	$(window).on("resize", resizer);
	// helpers for responsible positioning.

	function getWindowHeight() {
		return windowHeight;
	}
	function getWindowDoubleHeight() {
		return windowHeight*2;
	}
	function getWindowTribleHeight() {
		return windowHeight*3;
	}
	function getWindowOffset() {
		return -windowHeight*0.4;
	}
	function getWindowSunHeight() {
		return windowHeight*1.7;
	}
	
	

	function positionElements(){
		var wh = getWindowHeight();
		var ww = $(window).innerWidth();

		for(var s = 0; s < scenes.length; s++){
			$(scenes[s].id).height(wh*scenes[s].height);
		}
		$(".content-spacer").height(wh*top_gap);
		$(".anim-wrapper").css({top:wh*top_gap});
		full_height = $(document).innerHeight();
		console.log(full_height);
	}
	var wh = getWindowHeight();
	var ww = $(window).innerWidth();
	//$("#sun").css({marginLeft:-ww/4, marginTop:-ww, width:ww*2, height:ww*2});
	function initScroll(){
		

		var scene1 = new ScrollScene({triggerElement: "#scene1 .content-text", duration: getWindowHeight})
						.setPin("#scene1 .content-text")
						//.setTween(tween)
						.addTo(k2c.controller);

		scene1.triggerHook(top_gap);

		var tween1 = new TimelineMax().add(
			[
				TweenMax.fromTo("#roberto img", 2, {css:{scale:1, marginTop:-100, marginLeft:-100}},{css:{scale:0.3, marginTop:-350, marginLeft:0}, ease:Sine.easeInOut}),
				TweenMax.to("#scroll-down", 1, {rotation:-180})
			])
		.add(TweenMax.to("#roberto", 1, {css:{alpha:0,top:-100}, ease:Back.easeIn}));


		

		var scene1_animated = new ScrollScene({triggerElement: "#roberto", duration: getWindowDoubleHeight})
						.setTween(tween1)
						.addTo(k2c.controller);

		scene1_animated.triggerHook(top_gap);



		var scene1_animated2 = new ScrollScene({triggerElement: "#roberto"})
						.setPin("#roberto")
						.addTo(k2c.controller);

		scene1_animated2.triggerHook(top_gap);





		var scene2 = new ScrollScene({triggerElement: "#scene2 .content-text", duration: getWindowHeight})
						.setPin("#scene2 .content-text")
						//.setTween(tween)
						.addTo(k2c.controller)
						.on("start end", function (e) {
							if(e.type == "start"){
								if(e.target.parent().info("scrollDirection") == "FORWARD"){
									$("#header").removeClass("turk-header");
									$("#header").addClass("white-header");
								}else{
									$("#header").removeClass("white-header");
									$("#header").addClass("turk-header");
								}
								
							}
						});
		scene2.triggerHook(top_gap);

		var scene3 = new ScrollScene({triggerElement: "#scene3 .content-text", duration: getWindowHeight})
						.setPin("#scene3 .content-text")
						//.setTween(tween)
						.addTo(k2c.controller);
		scene3.triggerHook(top_gap);

		var m1 = 400;
		var m2 = 100;
		var m3 = 200;

		var tween4 = new TimelineMax()
		.add([	
				//placebo
				TweenMax.to("#start-now", 2, {}),
				TweenMax.to("#start-now", 0.6, {delay:0.3, alpha:0, ease:Sine.easeInOut}),
				TweenMax.fromTo("#col1", 1, {css:{marginTop:m1}}, {delay:0.5, css:{marginTop:0}, ease:Sine.easeInOut}),
				TweenMax.fromTo("#col2", 1, {css:{marginTop:m2}}, {delay:0.5, css:{marginTop:0}, ease:Sine.easeInOut}),
				TweenMax.fromTo("#col3", 1, {css:{marginTop:m3}}, {delay:0.5, css:{marginTop:0}, ease:Sine.easeInOut}),

				TweenMax.fromTo("#col1", .2, {alpha:0}, {delay:0.5, alpha:1, ease:Sine.easeInOut}),
				TweenMax.fromTo("#col2", .2, {alpha:0}, {delay:0.5, alpha:1, ease:Sine.easeInOut}),
				TweenMax.fromTo("#col3", .2, {alpha:0}, {delay:0.5, alpha:1, ease:Sine.easeInOut})
			]);


		var scene4 = new ScrollScene({triggerElement: "#scene4 .content-text", duration: getWindowDoubleHeight})
						.setPin("#scene4 .content-text")
						.setTween(tween4)
						.addTo(k2c.controller);
		scene4.triggerHook(top_gap);



		var scene5 = new ScrollScene({triggerElement: "#scene5 .content-text", duration: getWindowHeight})
						.setPin("#scene5 .content-text")
						//.setTween(tween)
						.addTo(k2c.controller)
						.on("start end", function (e) {
							if(e.type == "start"){
								if(e.target.parent().info("scrollDirection") == "FORWARD"){
									$("#header").removeClass("white-header");
									$("#header").addClass("grey-header");
								}else{
									$("#header").removeClass("grey-header");
									$("#header").addClass("white-header");
								}
								
							}
						});
		scene5.triggerHook(top_gap);


		var tween5 = new TimelineMax()
						
						.add([
							//placebo first
							TweenMax.fromTo("#globe2", 0.5, {css:{height:0}}, {css:{height:450}})

							])
						;



		var scene5_animated = new ScrollScene({triggerElement: "#scene5 .content-text", duration: getWindowHeight})
						.setPin("#globe")
						.setTween(tween5)
						.addTo(k2c.controller);
						/*.on("start end", function (e) {
							if(e.type == "end"){
								if(e.target.parent().info("scrollDirection") == "FORWARD"){
									$("#sun").addClass("sun-hidden");
								}else{
									$("#sun").removeClass("sun-hidden");
								}
								
							}
						});*/
		scene5_animated.triggerHook(top_gap);
						


		var tween6_1 = new TimelineMax()
						
						.add([
							//placebo first
							TweenMax.to("#sun", 1, {}),
							TweenMax.to("#yellow-cover", .6, {marginBottom:0}),
							
							TweenMax.fromTo("#sun", 0.01, {marginLeft:0, marginTop:0, width:50, height:50}, {marginLeft:-ww/4, marginTop:-ww, width:ww*2, height:ww*2}),
							TweenMax.to("#sun", 0.5, {delay:0.01, width:280, height:280, marginTop:-60-getWindowHeight()*top_gap, marginLeft:140, top:0, ease:Sine.easeIn}),
							TweenMax.to("#fuel_yellow", 0.37, {delay:0.33, height:0})
							])
						;
		var scene6_1 = new ScrollScene({triggerElement: "#sun", duration: getWindowSunHeight})
						.setPin("#sun")
						.setTween(tween6_1)
						.addTo(k2c.controller)
						.on("start end", function (e) {
							if(e.type == "end"){
								if(e.target.parent().info("scrollDirection") == "FORWARD"){
									$("#header").removeClass("grey-header");
									$("#header").addClass("white-header");
								}else{
									$("#header").removeClass("white-header");
									$("#header").addClass("grey-header");
								}
								
							}
							/*if(e.type == "start"){
								if(e.target.parent().info("scrollDirection") == "FORWARD"){
									$("#yellow-cover").addClass("sun-hidden");
									//$("#sun").removeClass("sun-hidden");
									console.log("show")
								}else{
									$("#yellow-cover").removeClass("sun-hidden");
									//$("#sun").addClass("sun-hidden");
									console.log("hidden");
								}
								
							}*/
						})
						
		scene6_1.triggerHook(0.3);

		


		var scene6 = new ScrollScene({triggerElement: "#scene6 .content-text"})
						.setPin("#scene6 .content-text")

						//.setTween(tween6)
						.addTo(k2c.controller);
		scene6.triggerHook(top_gap);

		var scene6_2 = new ScrollScene({triggerElement: "#scene6 .content-text", duration: getWindowHeight})
						.setPin("#woods")
						.addTo(k2c.controller);
		scene6_2.triggerHook(0.6);




		var h1 = 35;
		var tween6_3 = new TimelineMax()
		
						.add([
							//placebo first
							TweenMax.to("#van", 5, {}),
							TweenMax.to("#fuel", 0.5, {marginLeft:300, rotation:60, alpha:0, ease:Sine.easeIn}),
							TweenMax.to("#head1", 0.5, {marginTop:-h1, ease:Sine.easeOut}),
							TweenMax.to("#head2", 0.5, {delay:0.1, marginTop:-h1, ease:Sine.easeOut}),
							TweenMax.to("#head3", 0.5, {delay:0.2, marginTop:-h1, ease:Sine.easeOut}),
							TweenMax.to("#van", 3, {delay:0.5, marginLeft:"-100%"})
							])


		var scene6_3 = new ScrollScene({triggerElement: "#scene6 .content-text", duration: getWindowDoubleHeight})
						.setTween(tween6_3)
						.addTo(k2c.controller);
		scene6_3.triggerHook(0);

		










		var tween7 = new TimelineMax()
						
						.add([
							TweenMax.from("#bulb", 0.2, {css:{alpha:0}, ease:Sine.easeIn}),
							TweenMax.from("#bulb", 0.5, {css:{bottom:"60%"}, ease:Sine.easeIn})
							])

		var bulb_on = false;
		$("#bulb2").css({display:"none"});

		var scene7 = new ScrollScene({triggerElement: "#scene7 .content-text", duration: getWindowHeight})
						.setPin("#scene7 .content-text")
						.setTween(tween7)
						//.setTween(tween6)
						.addTo(k2c.controller)
						.on("progress", function (e) {
							if(e.progress.toFixed(3) > 0.996){
								bulb_on = true;
								$("#bulb2").css({display:"block"});
							}else{
								if(bulb_on){
									bulb_on = false;
									$("#bulb2").css({display:"none"});
								}
							}
							
						})

		scene7.triggerHook(top_gap);

	


		//scene1_animated.addIndicators();
		/*var scene = new ScrollScene({triggerElement: "#trigger", duration: 200})
												.addTo(controller)
												.on("update", function (e) {
													$("#scrollDirection").text(e.target.parent().info("scrollDirection"));
												})
												.on("enter leave", function (e) {
													$("#state").text(e.type == "enter" ? "inside" : "outside");
												})
												.on("start end", function (e) {
													$("#lastHit").text(e.type == "start" ? "top" : "bottom");
												})
												.on("progress", function (e) {
													$("#progress").text(e.progress.toFixed(3));
												});*/
	}
	positionElements();
	initScroll();

});