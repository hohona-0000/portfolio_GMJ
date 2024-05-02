
//mainmenu
var tab = 0;
$(".mainmenu li").click(function(){
    $(".mainmenu li").removeClass("on");
    $(this).addClass("on");})


//submenu
$(".submenu li").click(function(){
    $(".submenu li").removeClass("on_me");
    $(this).addClass("on_me");})


//slide
var imgs =0;
function slide()
{if (imgs<2) {imgs++;} else {imgs=0;}
$("#imgslide ul").animate({left : -1 * 1300 *imgs}, 2000)}
setInterval (slide,4000)


//remote
$(".up").click(function(){$(window).scrollTop({top : 0, left : 0, behavior:"smooth"})});
$(".downc").click(function(){window.scrollTo({top : 2120, left : 0, behavior:"smooth"})});

