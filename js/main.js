$( document ).ready(function() {
    jQuery(function($) { 
		     $('.about p').waypoint(function() {
		        $(this).toggleClass( 'fadeInDown animated' );
		    },
		    {
		        offset: '50%',
		    });
		   
		    $('.contact_email').waypoint(function() {
		        $(this).toggleClass( 'fadeInDown animated' );
		    },
		    {
		        offset: '90%',
		    });

		    $('.work').waypoint(function() {
		        $(this).toggleClass( 'bounceIn animated' );
		    },
		    {
		        offset: '70%',
		    });

		     $('.pProyecto').waypoint(function() {
		        $(this).toggleClass( 'bounceIn  animated' );
		    },
		    {
		        offset: '90%',
		    });

		     $('.trabajos h3').waypoint(function() {
		        $(this).toggleClass( 'fadeInLeft  animated' );
		    },
		    {
		        offset: '90%',
		    });
		     $('h1').waypoint(function() {
		        $(this).toggleClass( 'lightSpeedIn  animated' );
		    },
		    {
		        offset: '90%',
		      //  triggerOnce: true
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



$('.about a').click(function(e){
	$('html').css({'overflow-y':'hidden'});
	$('body').css({'padding-right':getScrollBarWidth()});
	var verScrollPos=$(document).scrollTop();
	$(document).scrollTop(verScrollPos);
	$('#overlay').fadeIn().scrollTop(0);
	$('#overlay p').show();
	$('#overlay p').removeClass().addClass('zoomIn animated');
	history.pushState({},'',this.href);
	e.preventDefault();
});

var overlayTextHeight=$('.overlay p').height()/2;
$('.overlay p').css({marginTop:overlayTextHeight*-1});

function getScrollBarWidth(){
	var $outer=$('<div>').css({visibility:'hidden',width:100,overflow:'scroll'}).appendTo('body'),
	widthWithScroll=$('<div>').css({width:'100%'}).appendTo($outer).outerWidth();
	$outer.remove();

	return 100-widthWithScroll;
};

$('.work a').click(function(e){
	$('html').css({'overflow-y':'hidden'});
	$('body').css({'padding-right':getScrollBarWidth()});
	var verScrollPos=$(document).scrollTop();
	$(document).scrollTop(verScrollPos);
	var currentLi=$(this).parent('.work').index();
	
	$('#overlay').fadeIn().scrollTop(0);
	$('#overlay li').eq(currentLi).show();
	$('#overlay img').removeClass().addClass('zoomIn animated');
	history.pushState({},'',this.href);
	e.preventDefault();
});

$('#overlay').click(function(){
	$('html').css({'overflow-y':'scroll'});
	$('body').css({'padding-right':0});
	$('#overlay img').removeClass().addClass('zoomOut animated');

	setTimeout(function(){
		$('#overlay').fadeOut();
		$('#overlay li').hide();
		},200);

	history.pushState('',document.title,window.location.pathname);
});

if(window.location.hash){
	var currentHash=window.location.hash;
	$('.work a').each(function(){
		if($(this).attr('href')==currentHash){
			$(this).click();
		}
	});
}