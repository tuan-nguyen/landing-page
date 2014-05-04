$(window).load(function(){	
/* 		$('.lineone ').delay(1000).fadeIn(2000);
		$('.lineone').delay(1000).animate({top: '0'}, 2000);
		$('.linetwo ').delay(1500).fadeIn(2000);
		$('.linetwo').delay(1500).animate({top: '0'}, 1500, 'easeOutQuart');
		$('.linethree ').delay(2000).fadeIn(2000);
		$('.linethree').delay(2000).animate({top: '0'}, 1500, 'easeOutQuart'); */
				
});

$(document).ready(function(){
	var banner = 0;
	$('.left2000 ').css('left',-2000);
	mapIframe = '<iframe width="480" height="310" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=vi&amp;geocode=&amp;q=Vincom+B,+L%C3%AA+Th%C3%A1nh+T%C3%B4n,+Vincom+Center+Shopping+Mall,+B%E1%BA%BFn+Ngh%C3%A9,+Qu%E1%BA%ADn+1,+Ho+Chi+Minh+City,+Vi%E1%BB%87t+Nam&amp;sll=37.0625,-95.677068&amp;sspn=42.716829,79.013672&amp;ie=UTF8&amp;split=0&amp;hq=&amp;hnear=Vincom+B,+L%C3%AA+Th%C3%A1nh+T%C3%B4n,+B%E1%BA%BFn+Ngh%C3%A9,+Qu%E1%BA%ADn+1,+Ho+Chi+Minh+City,+Vi%E1%BB%87t+Nam&amp;t=m&amp;ll=10.778421,106.702244&amp;spn=0.006535,0.010278&amp;z=16&iwloc=near&amp;output=embed"></iframe>';
	$('.boxMap').delay(5000).append(mapIframe);
	//background image 
	windowWidth = $(document).width();
	if( windowWidth<1600){		
		left = ( windowWidth - 1600)/2;
		$('#banner').css("background-position",left);
		$('#testimonial').css("background-position",left);
		
	}
	banner2(); 
	//Tab event 2013
	/* $('.y2014').css("display","block"); */
	/* $('.y2013').css("display","block"); */
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
	$(".navEmag").mouseover(function(){
		menuOver($(".navEmag"), 7);
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
	$(".navEmag").mouseout(function(){
		menuOut($(".navEmag"), 7);
	});
	$(".navSukien").mouseout(function(){
		menuOut($(".navSukien"), 4);
	});
	$(".navContact").mouseout(function(){
		menuOut($(".navContact"), 5);
	});
	
	$(".navAdv").mouseover(function(){
		imgSrc = './pics/icon6-hover.png';
		$('.navAdv').find('img').attr('src',imgSrc);		
		$('.navAdv').find('a').css("color","#fff");
		$('.navAdv').css("background","#4f4f4f");
	});	
	$(".navAdv").mouseout(function(){
		imgSrc = './pics/icon6.png';
		$('.navAdv').find('img').attr('src',imgSrc);	
		$('.navAdv').find('a').css("color","#444444");
		$('.navAdv').css("background","#fff");
	});
	//End hover menu
	
	//Newsletter
	$("#signUp").click(function(){
		registerNewsletter();
	});
	$("#emailNewsletter").keypress(function(e) {
		if(e.which == 13) {
			registerNewsletter();
			e.preventDefault()
			return;
		}
	});
	//Contact
	$("#btnContact").click(function(){
		contact();
	});
	//Magazine
	$(".cover12").hover(function(){
		$("#infoCover12").fadeIn(500);
	},function(){	
		$("#infoCover12").stop();
		$("#infoCover12").fadeOut(500);	
	});
	$(".cover11").hover(function(){
		$("#infoCover11").fadeIn(500);
	},function(){	
		$("#infoCover11").stop();
		$("#infoCover11").fadeOut(500);	
	});
	$(".cover10").hover(function(){
		$("#infoCover10").fadeIn(500);
	},function(){	
		$("#infoCover10").stop();
		$("#infoCover10").fadeOut(500);	
	});
	$(".cover9").hover(function(){
		$("#infoCover9").fadeIn(500);
	},function(){	
		$("#infoCover9").stop();
		$("#infoCover9").fadeOut(500);	
	});
	$(".cover8").hover(function(){
		$("#infoCover8").fadeIn(500);
	},function(){	
		$("#infoCover8").stop();
		$("#infoCover8").fadeOut(500);	
	});
	$(".cover7").hover(function(){
		$("#infoCover7").fadeIn(500);
	},function(){
		$("#infoCover7").stop();
		$("#infoCover7").fadeOut(500);
	});
	$(".cover6").hover(function(){
		$("#infoCover6").fadeIn(500);
	},function(){
		$("#infoCover6").stop();
		$("#infoCover6").fadeOut(500);
	});
	$(".cover5").hover(function(){
		$("#infoCover5").fadeIn(500);
	},function(){
		$("#infoCover5").stop();
		$("#infoCover5").fadeOut(500);
	});
	$(".cover4").hover(function(){
		$("#infoCover4").fadeIn(500);
	},function(){	
		$("#infoCover4").stop();
		$("#infoCover4").fadeOut(500);	
	});
	$(".cover3").hover(function(){
		$("#infoCover3").fadeIn(500);
	},function(){
		$("#infoCover3").stop();
		$("#infoCover3").fadeOut(500);
	});
	$(".cover2").hover(function(){
		$("#infoCover2").fadeIn(500);
	},function(){
		$("#infoCover2").stop();
		$("#infoCover2").fadeOut(500);
	});
	$(".cover1").hover(function(){
		$("#infoCover1").fadeIn(500);
	},function(){
		$("#infoCover1").stop();
		$("#infoCover1").fadeOut(500);
	});
	
	//digital
	$("#app1").hover(function(){
		$("#app1").find('.nameApp').show();
	},function(){
		$("#app1").find('.nameApp').hide();
	});
	$("#app2").hover(function(){
		$("#app2").find('.nameApp').show();
	},function(){
		$("#app2").find('.nameApp').hide();
	});
	$("#app3").hover(function(){
		$("#app3").find('.nameApp').show();
	},function(){
		$("#app3").find('.nameApp').hide();
	});
	$("#app4").hover(function(){
		$("#app4").find('.nameApp2').show();
	},function(){
		$("#app4").find('.nameApp2').hide();
	});
	$("#app5").hover(function(){
		$("#app5").find('.nameApp').show();
	},function(){
		$("#app5").find('.nameApp').hide();
	});
	$("#app6").hover(function(){
		$("#app6").find('.nameApp').show();
	},function(){
		$("#app6").find('.nameApp').hide();
	});
	$("div.tabEvent").click(function () {               
		// tắt tất cả các tab 
		$(".actedtab").removeClass("actedtab"); 			
		// bật tab đang click lên 
		$(this).addClass("actedtab"); 		
		var content_show = $(this).attr("title"); 
		if(content_show == '2014'){
			$(".y2013").hide();
			$(".y2014").show();
		}else if(content_show == '2013'){
			$(".y2013").show();
			$(".y2014").hide();
		}
	}); 

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
function changeBackgroundImage(self){
	$('.navHome img').attr('src','pics/icon1.png');
	$('.navDatbao img').attr('src','./pics/icon2.png');
	$('.navMagazine img').attr('src','./pics/icon3.png');
	$('.navSukien img').attr('src','./pics/icon4.png');
	$('.navContact img').attr('src','./pics/icon5.png');	
	$('.navEmag img').attr('src','./pics/icon7.png');
	
	var imgSRC = self.find('img').attr('src');
	//alert(imgSRC);
	for(i=1;i<8;i++){		
		if( imgSRC.indexOf(i) != -1 ){
			self.find('img').attr('src', './pics/icon'+i+'-hover.png');
		}
	}
}
function postNewsletter(){
	e.preventDefault();
}
function changeYear(year){
	if(year=='2013'){
		$('.y2013').css("display","block");
		$('.y2014').css("display","none");
		$("#EventGroup-1").addClass("actedtab");
		$("#EventGroup-2").removeClass("actedtab");
	}else if(year=='2014'){
		$('.y2013').css("display","none");
		$('.y2014').css("display","block");
		$("#EventGroup-1").removeClass("actedtab");
		$("#EventGroup-2").addClass("actedtab");
	}
}
function banner1(){
	banner = 1;
	$('#banner2').css('display','none');			
	$('#banner3').css('display','none');
	$('#banner1').css('display','block');

	$('#ban1-frame1').delay(500).animate({left:'0',}, 1000);
	$('#ban1-frame2').delay(1500).animate({top:'20',}, 1000);
	$('#ban1-frame3').delay(2500).animate({opacity:'1',}, 1000);
	
	$('#ban1-frame1').delay(10000).animate({left:'-2000',});
	$('#ban1-frame2').delay(10000).animate({top:'-2000',});
	$('#ban1-frame3').delay(10000).animate({opacity:'0',}); 
	setTimeout(function(){banner2()},10500);
}
function banner2(){
	banner = 2;
	$('#banner1').css('display','none');	
	$('#banner3').css('display','none');		
	$('#banner2').css('display','block');
	
	$('#ban2-frame1').delay(1000).animate({opacity:'1',}, 1000);
	$('#ban2-frame2').delay(2000).animate({top:'0',}, 1000);
	$('#ban2-frame3').delay(3000).animate({opacity:'1',}, 1000);
	
	$('#ban2-frame1').delay(10000).animate({opacity:'0',});
	$('#ban2-frame2').delay(10000).animate({top:'-2000',});
	$('#ban2-frame3').delay(10000).animate({opacity:'0',});
	setTimeout(function(){banner3()},10500); 
}
function banner3(){
	banner = 3;
	$('#banner1').css('display','none');		
	$('#banner2').css('display','none');	
	$('#banner3').css('display','block');

	$('#ban3-frame1').delay(2000).animate({top:'70',}, 1200);
	$('#ban3-frame2').delay(2000).animate({opacity:'1',}, 1200);
	$('#ban3-frame3').delay(4500).animate({opacity:'1',}, 1200);
	
	$('#ban3-frame1').delay(10000).animate({top:'-2000',});
	$('#ban3-frame2').delay(10000).animate({opacity:'0',});
	$('#ban3-frame3').delay(10000).animate({opacity:'0',});
	setTimeout(function(){banner1()},10500);
}
function checkEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}
function checkContact(){
	if( $('#fullname').val()==''){
		alert('Nhập họ tên');
		$('#fullname').focus();		
		return false;
	}
	if( !checkEmail($('#email').val()) ){
		alert('Nhập email');
		$('#email').focus();		
		return false;
	}
	if( $('#subject').val()==''){
		alert('Nhập tiêu đề');
		$('#subject').focus();		
		return false;
	}
	if( $('#content').val()==''){
		alert('Nhập nội dung');
		$('#content').focus();		
		return false;
	}
	return true;
}
function registerNewsletter(){	
	if( !checkEmail($("#emailNewsletter").val()) ){
		alert("Nhập email!");
		return;
	}else{
		$('#theForm').submit();	
		alert("Gửi thành công!");
		$("#emailNewsletter").val('');
	}
}
function contact(){
	if(checkContact()){
		$('#contactForm').submit();	
		alert("Gửi thành công!");
		$('#fullname').val('');
		$('#email').val('');
		$('#phone').val('');
		$('#subject').val('');
		$('#content').val('');
	}
}
function bannerPrev(){
	if(banner == 1){
		$('#ban1-frame1').dequeue();
		$('#ban1-frame2').dequeue();
		$('#ban1-frame3').dequeue();
		$('#ban1-frame1').css('left','-2000px');
		$('#ban1-frame2').css('top','-2000px');
		$('#ban1-frame3').css('opacity','0');
		banner3();
	}
	if(banner == 2){
		$('#ban2-frame1').dequeue();
		$('#ban2-frame2').dequeue();
		$('#ban2-frame3').dequeue();
		$('#ban2-frame1').css('opacity','0');
		$('#ban2-frame2').css('top','-2000px');
		$('#ban2-frame3').css('opacity','0');
		banner1();
	}
	if(banner == 3){
		$('#ban3-frame1').dequeue();
		$('#ban3-frame2').dequeue();
		$('#ban3-frame3').dequeue();
		$('#ban3-frame1').css('top','-2000px');
		$('#ban3-frame2').css('opacity','0');
		$('#ban3-frame3').css('opacity','0');
		banner2();
	}
}