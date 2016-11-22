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
	$('.accordeon').find('.accordeon-box--button').click(function(){
	    $(this).next().stop().slideToggle();
		$(this).children().toggleClass("close");
		$(this).parent().toggleClass("active");		
	}).next().stop().hide();

});

$(document).ready(function() {
	$('.photo-block_item').fancybox();
});
