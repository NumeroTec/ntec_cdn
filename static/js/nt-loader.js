/*
* V 1.0
* Author : Sridharan.r
* Date   : 26-12-2023 11:36 AM 
* Usage  : basic loader for all div and body in html 
* Example :

    1.Show loader 
    
      $(selector).showLoader() 
            // or //
      $(selector).loader("show")

    2.Close loader :
    
      $(selector).closeLoader()
        // or //
      $(selector).loader('close')

*/
(function( $ ) {
 	
 	var loader_svg = "<div class=\"loader-block\"></div><div class=\"svg-container\"> <svg version=\"1.1\" id=\"L4\" height=\"100px\" width=\"55px\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0\" enable-background=\"new 0 0 0 0\" xml:space=\"preserve\"><circle fill=\"#000\" stroke=\"none\" cx=\"6\" cy=\"50\" r=\"6\"><animate attributeName=\"opacity\" dur=\"1s\" values=\"0;1;0\" repeatCount=\"indefinite\" begin=\"0.1\" /> </circle> <circle fill=\"#000\" stroke=\"none\" cx=\"26\" cy=\"50\" r=\"6\"> <animate attributeName=\"opacity\" dur=\"1s\" values=\"0;1;0\" repeatCount=\"indefinite\" begin=\"0.2\"/> </circle> <circle fill=\"#000\" stroke=\"none\" cx=\"46\" cy=\"50\" r=\"6\"> <animate attributeName=\"opacity\" dur=\"1s\" values=\"0;1;0\" repeatCount=\"indefinite\" begin=\"0.3\"/> </circle> </svg></div>";

 	
    $.fn.showLoader = function() {
        loader_show(this)
    };
 
    $.fn.closeLoader = function() {
        loader_close(this)
    };


    $.fn.loader = function( action ) {
 
        if ( action === "show") {
            loader_show(this)
        }
 
        if ( action === "close" ) {
          	loader_close(this)
        }
 
    };


    function loader_show(e) {
    	e.append(loader_svg)
    	loader_style(e)
    }

    function loader_close(e) {
    	e.children('.loader-block').remove()
    	e.children('.svg-container').remove()
    }

    function loader_style(e) {
    	e.css({'position':'relative'})
    	jQuery('.svg-container').css({
	    	'position': 'absolute',
	      	'top': '50%',
	      	'left': '50%',
	      	'transform': 'translate(-50%,-50%)'
	    });
	    jQuery('.loader-block').css({
		    'background': 'white',
		    'bottom': '0px',
		    'width': '100%',
		    'position': 'absolute',
		    'top': '0px',
		    'left': '0px'
	    });
    }

 
}( jQuery ));