$(function(){
  var hg = ($('.public-head.full').width()/2.35)
  //$('.public-head.full').height($('.public-head.full').width()/2.35);
  $('.index-social_item').height($('.index-social_item').width()/4.14);
  //$('.index').css("padding-top", hg);
  $(window).resize(function(){
   // $('.public-head.full').height($('.public-head.full').width()/2.35);
  $('.index-social_item').height($('.index-social_item').width()/4.14);
  //$('.index').css("padding-top", hg);
  });
  console.log(hg)
});

$(function(){
	$('.menu-header').click(function () {
        $('ul').toggleClass("open")
    });
  	$(".gallery-list").owlCarousel({
		items : 3,
		navigation : true,
		navText : ['', ''],
  	});
	$('.gallery-list--item').click(function(){
		$(".gallery-current img").attr("src", $(this).attr("src"));
	});
	$('.accordeon').find('.accordeon-box--button').click(function(){
	    $(this).next().stop().slideToggle();
		$(this).children().toggleClass("close");
		$(this).parent().toggleClass("active");		
	}).next().stop().hide();
});

$(document).ready(function() {
	$('.photo-block_item').fancybox();
});

$(function(){
	if($(window).width() < 769)
		{
			$(".years li").replaceWith(function(index, oldHTML){
				return $("<option>").html(oldHTML);
			});
			$("ul.years").replaceWith(function(index, oldHTML){
				return $("<select>").html(oldHTML);
			});
		}
});

$(document).ready(function(){
	$("body").removeClass("min");
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$("body").addClass("min").fadeIn;
			$(".to-down").addClass("none");
		} else {
			$("body").removeClass("min").fadeIn;
			$(".to-down").removeClass("none");
		};
	});
});

$(document).ready(function () {
    $(".shadow").hover(function () {
    	$(this).find(".more").toggleClass("opacity");
    });
    $('.index-social_item').hover(function () {
    	$(this).children("p").toggleClass("opacity");//TODO fix find
    });
});

$(document).ready(function() {
	if($(window).width() < 480){
		$(".owl-carousel").owlCarousel({
				items : 1,
				navigation : true,
				navText : ['', '']   
			});
		}
	else{
		$(".owl-carousel").owlCarousel({
			items : 2,
			navigation : true,
			navText : ['', '']   
		});
	}
});



