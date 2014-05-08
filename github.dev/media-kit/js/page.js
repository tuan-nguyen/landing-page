$(document).ready(function(){
	// Hover menu
	$(".navHome").mouseover(function(){
		menuOver($(".navHome"), 1);
	});
	$(".navDatbao").mouseover(function(){
		menuOver($(".navDatbao"), 2);
	});
	$(".navMagazine").mouseover(function(){
		menuOver($(".navMagazine"), 3);
	});
	$(".navSukien").mouseover(function(){
		menuOver($(".navSukien"), 4);
	});
	$(".navContact").mouseover(function(){
		menuOver($(".navContact"), 5);
	});	
	$(".navHome").mouseout(function(){
		menuOut($(".navHome"), 1);
	});
	$(".navDatbao").mouseout(function(){
		menuOut($(".navDatbao"), 2);
	});
	$(".navMagazine").mouseout(function(){
		menuOut($(".navMagazine"), 3);
	});
	$(".navSukien").mouseout(function(){
		menuOut($(".navSukien"), 4);
	});
	$(".navContact").mouseout(function(){
		menuOut($(".navContact"), 5);
	});
	//End hover menu

});
function menuOver(menu, flag){
	imgSrc = './pics/icon'+flag+'-hover.png';
	menu.addClass("hover");
	menu.find('img').attr('src',imgSrc);
}
function menuOut(menu, flag){
	imgSrc = './pics/icon'+flag+'.png';
	menu.removeClass("hover");
	if( !menu.hasClass('actedTab') ){
		menu.find('img').attr('src', imgSrc);
	}
}