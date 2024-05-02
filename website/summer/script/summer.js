//submenu
$(".navi li").mouseover(function(){$(this).find(".submenu").stop().slideDown()});
$(".navi li").mouseout(function(){$(this).find(".submenu").stop().slideUp()});

$(".navi li").focusin(function(){$(this).find(".submenu").stop().slideDown()});
$(".navi li").focusout(function(){$(this).find(".submenu").stop().slideUp()});


//slide(left)
var imgs=0;
function slide(){
    if(imgs<2) {imgs++;} else {imgs=0;}
    $("#imgslide ul").animate({left : -100 * imgs + "%"}, 1000)
} setInterval(slide, 2000)


//modal
$(".cc").click(function(){$(".modal").show()});
$(".button button").click(function(){$(".modal").hide()});


