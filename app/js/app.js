$(function(){
	//top-menu
	$('.menu-header').click(function () {
        $('ul').toggleClass("open")
    });

  	$(".gallery-list").owlCarousel({
		items : 3,
		navigation : true,
		navText : ['', '']
  	});
  	
	$('.gallery-list--item').click(function(){
		$(".gallery-current img").attr("src", $(this).attr("src"));
	});
	//accordeon
	$('.accordeon').find('.accordeon-box_head').click(function(){
	    $(this).next().stop().slideToggle();
	}).next().stop().hide();
	$('.accordeon-box_head').click(function(){
	    $(this).toggleClass("js_up");
	});

});

$(document).ready(function() {
	$('.photo-block_item').fancybox();
});
