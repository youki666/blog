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

     $('.slide .news .first').mouseover(function(){
     	//$(this).addClass('on');
     },function(){
        $('.news-item1').css('display','block');
        $('.news-item2').css('display','none');
        //$('.second').removeClass('on');
     });
     $('.slide .news .second').mouseover(function(){
     	//$(this).addClass('on');
     	$('.news-item1').css('display','none');
     	$('.news-item2').css('display','block');
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
	});
		$('.carousel-panel:not(:first)').hide();//将除了第一张的照片隐藏
		$('.carousel-item:first').addClass('carousel-on');//将carousel-item的第一个项目设置为激活状态；
		$('.carousel-page a').hide();//隐藏向前向后按钮;
		$('.carousel-pre,.carousel-panel,.carousel-next').hover(function(){
			stop();
			$('.carousel-page a').show();
		},function(){
			start();
			$('.carousel-page a').hide();
		});
		$('.carousel-pre').unbind('click');
		$('.carousel-pre').bind('click',function(){
			pre();
		});
		$('.carousel-next').unbind('click');
		$('.carousel-next').bind('click',function(){
			next();
		});
		 $('.carousel-item').hover(function(e){
		 	stop();
		 	var preIndex = $(".carousel-item").filter(".carousel-on").index();
		 	currentIndex = $(this).index();
		 	play(preIndex,currentIndex);
		 },function(){
		 	start();
		 });
		var hasStart = false,
		    currentIndex = 0,
		    length,
		    interval,
		    length = $('.carousel-panel').length,
		    t = 1000;
		   var preIndex = $(".carousel-item").filter(".carousel-on").index();
               currentIndex = $(this).index();
               //向前翻页
		function pre(){
			var preIndex = currentIndex;
                currentIndex = (--currentIndex + length) % length;
              play(preIndex, currentIndex);
		};
		//向后翻页
		function next(){
			var preIndex = currentIndex;
             currentIndex = ++currentIndex % length;
             play(preIndex, currentIndex);
		};
		//Carousel
		  function play(preIndex, currentIndex) {
         $('.carousel-panel').eq(preIndex).fadeOut(500)
           .parent().children().eq(currentIndex).fadeIn(500);
            $('.carousel-item').removeClass('carousel-on');
          $('.carousel-item').eq(currentIndex).addClass('carousel-on');
        };
        //Start
          function start(){
          	if(!hasStart){
          		hasStart = true;
          		 interval = setInterval(next, t);
          	}
          };
          //Stop
          function stop(){
          	clearInterval(interval);
          	hasStart = false;
          };
          start();

})