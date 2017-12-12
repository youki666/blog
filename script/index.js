$(function(){
	$('.top i').click(function(){
		$('.top').fadeOut(200);
	});
	$('.item-a').click(function(){
		var $value = $(this).text();
		//$(this).css('background-color','#f10215');
		//$(this).css('color','#fff');
		//$(this).removeClass();
		console.log($value);
		//location.reload();
		$(this).addClass('activing').end();
		$(this).css('color','#fff').end();
		$('.location .active').html($value);
		//$('.active').attr($value);
	});
	$("ul li.list1").mouseover(function(){
		$(".cate").css("display","block");
	});
	$("ul li.list1").mouseout(function(){
	$(".cate").css("display","none");
	});
	$('.nav').mouseover(function(){
		$(this).css("width","140px");
		$(this).css("background-color","#c81632");

	})
		$('.nav').mouseout(function(){
		$(this).css("width","40px");
		$(this).css("background-color","#ccc");
		//$(this).remove("<p>666</p>");
	})
		$('.nav p').hover(function(){
		$(this).css("display","block");
		
		//$(this).remove("<p>666</p>");
	})

})