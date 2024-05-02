


//submenu
$(".navi li").mouseover(function(){$(this).find(".submenu").stop().slideDown()});
$(".navi li").mouseout(function(){$(this).find(".submenu").stop().slideUp()});

//imgslide (top)
var imgs=0;
function slide(){
    if (imgs<2) {imgs++;} else {imgs=0;}
    $("#imgslide ul").animate({top : -1 * 300 * imgs}, 1000)
}
setInterval (slide,2000)



//modal
$(".cc").click(function(){$(".modal").show()});
$(".button button").click(function(){$(".modal").hide()});
