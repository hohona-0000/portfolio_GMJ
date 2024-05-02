//submenu
$(".navi li").mouseover(function(){$(".submenu").stop().fadeIn()});
$(".navi li").mouseout(function(){$(".submenu").stop().fadeOut()});

$(".navi li").focusin(function(){$(".submenu").stop().fadeIn()});
$(".navi li").focusout(function(){$(".submenu").stop().fadeOut()});


//slide(fade)
$("#imgslide ul li").hide()
$("#imgslide ul li").eq(0).show()

var imgs=0;
function slide(){
    if (imgs<2) {imgs++;} else {imgs=0;}
    $("#imgslide ul li").fadeOut()
    $("#imgslide ul li").eq(imgs).fadeIn()
} setInterval (slide, 3000)


//tabmenu
var tab=0;
$(".tabmenu li").click(function(){$(".tabmenu li").removeClass("on");
$(this).addClass("on")

tab=$(this).index();
$(".tabcon").hide();
$(".tabcon").eq(tab).show();
return false();})


//modal
$(".cc").click(function(){$(".modal").show()});
$(".button button").click(function(){$(".modal").hide()});