$(document).ready(function(){
	$("#mnuGioithieu").click(function(){
		$("#mnuGioithieu").addClass('actedtab');
		$("#gioithieu").show();		
		$("#mnuChuongtrinh").removeClass('actedtab');
		$("#chuongtrinh").hide();
		$("#mnuDiadiem").removeClass('actedtab');
		$("#diadiem").hide();
		$("#mnuLienhe").removeClass('actedtab');
		$("#lienhe").hide();
		$("#mnuBaiviet").removeClass('actedtab');
		$("#baiviet").hide();
	});
	$("#mnuChuongtrinh").click(function(){		
		$("#mnuGioithieu").removeClass('actedtab');
		$("#gioithieu").hide();
		$("#mnuChuongtrinh").addClass('actedtab');
		$("#chuongtrinh").show();
		$("#mnuDiadiem").removeClass('actedtab');
		$("#diadiem").hide();
		$("#mnuLienhe").removeClass('actedtab');
		$("#lienhe").hide();
		$("#mnuBaiviet").removeClass('actedtab');
		$("#baiviet").hide();
	});
	$("#mnuDiadiem").click(function(){
		$("#mnuGioithieu").removeClass('actedtab');
		$("#gioithieu").hide();
		$("#mnuChuongtrinh").removeClass('actedtab');
		$("#chuongtrinh").hide();
		$("#mnuDiadiem").addClass('actedtab');
		$("#diadiem").show();
		$("#mnuLienhe").removeClass('actedtab');
		$("#lienhe").hide();
		$("#mnuBaiviet").removeClass('actedtab');
		$("#baiviet").hide();
	});
	$("#mnuLienhe").click(function(){
		$("#mnuGioithieu").removeClass('actedtab');
		$("#gioithieu").hide();
		$("#mnuChuongtrinh").removeClass('actedtab');
		$("#chuongtrinh").hide();
		$("#mnuDiadiem").removeClass('actedtab');
		$("#diadiem").hide();
		$("#mnuLienhe").addClass('actedtab');
		$("#lienhe").show();
		$("#mnuBaiviet").removeClass('actedtab');
		$("#baiviet").hide();
	});
	$("#mnuBaiviet").click(function(){
		$("#mnuGioithieu").removeClass('actedtab');
		$("#gioithieu").hide();
		$("#mnuChuongtrinh").removeClass('actedtab');
		$("#chuongtrinh").hide();
		$("#mnuDiadiem").removeClass('actedtab');
		$("#diadiem").hide();
		$("#mnuLienhe").removeClass('actedtab');
		$("#lienhe").hide();
		$("#mnuBaiviet").addClass('actedtab');
		$("#baiviet").show();
	});
});