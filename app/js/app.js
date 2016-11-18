$(function(){
	//top-menu
	$('.menu-header').click(function () {
        $('ul').toggleClass("open")
    });

    $('.gallery-list--item').click(function(){
		$(".gallery-current img").attr("src", $(this).attr("src"));
	});
});