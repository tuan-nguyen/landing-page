/*
 * MovingBoxes demo script
 */

$(function(){

	$('#slider-one').movingBoxes({
		startPanel   : 8,      // start with this panel
		reducedSize  : 0.8,    // non-current panel size: 80% of panel size
		wrap         : true,   // if true, the panel will "wrap" (it really rewinds/fast forwards) at the ends
		buildNav     : false,   // if true, navigation links will be added
		navFormatter : function(){ return "&#9679;"; } // function which returns the navigation text for each panel
	});
	$('.dlinks').delegate('a', 'click', function(){
		// slider # stored in the text
		slider.movingBoxes( $(this).text() );
		return false;
	});
});