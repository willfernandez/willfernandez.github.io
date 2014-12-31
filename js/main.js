function windowContainerSizing(){
	var windowHeight=$(window).height();
	var headerHeight=$('header').height();
	var heroHeight=windowHeight-headerHeight;
	var boxpresentacionHeight=$('.box-presentacion').height();
	//var workDescription=$('.work li p').height();
	$('.presentacion').css({top:headerHeight,height:heroHeight});
	$('.box-presentacion').css({marginTop:(boxpresentacionHeight/2)*-1});
	$('.about').css({marginTop:heroHeight+headerHeight});
};

windowContainerSizing();

$(window).on('resize',function(){
	windowContainerSizing();
});