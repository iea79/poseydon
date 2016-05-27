$(document).ready(function() {
       $('.open-popup-link2').magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});
        $('.open-popup-link1').magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});
    $('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});
$(".tab_item").not(":first").hide();
$(".wrapper .tab").show().click(function() {
    var ind = $(this).index();
    $(".wrapper .tab").removeClass("active").eq(ind).addClass("active");
    $(".tab_item").hide().eq(ind).fadeIn()
}).eq(0).addClass("active");
$('#boutique').boutique({
		container_width: 'auto',
		front_img_width: 555,
		front_img_height: 565,
		behind_opacity: 1,
		hovergrowth: 0,
		frames: 5,
		front_topmargin: -40
	});
$("#block1").click(function() {
    $('html, body').animate({
        scrollTop: $("#block1-1").offset().top
    }, 2000);
});
$("#block2").click(function() {
    $('html, body').animate({
        scrollTop: $("#block2-2").offset().top
    }, 2000);
});
$("#block3").click(function() {
    $('html, body').animate({
        scrollTop: $("#block3-3").offset().top
    }, 2000);
});
$("#block4").click(function() {
    $('html, body').animate({
        scrollTop: $("#block4-4").offset().top
    }, 2000);
});
$("#block5").click(function() {
    $('html, body').animate({
        scrollTop: $("#block5-5").offset().top
    }, 2000);
});
}); 