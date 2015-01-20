$( document ).ready(function() {
    jQuery(function($) { 
		     $('.about p').waypoint(function() {
		        $(this).toggleClass( 'fadeInDown animated' );
		    },
		    {
		        offset: '70%',
		        triggerOnce: true
		    });

		     $('.trabajos .pProyecto').waypoint(function() {
		        $(this).toggleClass( 'rotateIn  animated' );
		    },
		    {
		        offset: '70%',
		        triggerOnce: true
		    });

		     $('h3').waypoint(function() {
		        $(this).toggleClass( 'fadeInLeft  animated' );
		    },
		    {
		        offset: '70%',
		        triggerOnce: true
		    });
		     $('h1').waypoint(function() {
		        $(this).toggleClass( 'lightSpeedIn  animated' );
		    },
		    {
		        offset: '70%',
		        triggerOnce: true
		    });
    
	});
	
});

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

$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});
