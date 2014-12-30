function windowContainerSizing(){
	var windowHeight=$(window).height();
	var headerHeight=$('header').height();
	var heroHeight=windowHeight-headerHeight;
	//var openerCopyHeight=$('.opener_copy').height();
	var workDescription=$('.work li p').height();
	$('.presentacion').css({top:headerHeight,height:heroHeight});
	//$('.opener_copy').css({marginTop:(openerCopyHeight/2)*-1});
	$('.about').css({marginTop:heroHeight+headerHeight});
};

windowContainerSizing();

$(window).on('resize',function(){
	windowContainerSizing();
});