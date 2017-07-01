$(function(){	
		//动画插件
		new WOW().init();
		//轮播图
		$("#banner").carousel({
				interval:2000
		})		
		//navbar-collapse菜单栏点击关闭
		$('.navbar-collapse a').click(function(){
			$('.navbar-collapse').collapse('hide');
		});
		
		//navbar-fixed-top的背景变颜色
		var topOffset=60;
		var target = $("#about").offset().top - topOffset;
		if($(window).scrollTop() >= target) {
			$(".navbar-fixed-top").addClass("bg-inverse");
			
		}
		else {
			$(".navbar-fixed-top").removeClass("bg-inverse");
			
		}
		$(window).scroll(function(){	   
			if($(this).scrollTop() >= target) {
				$(".navbar-fixed-top").addClass("bg-inverse");
				
			}
			else {
				$(".navbar-fixed-top").removeClass("bg-inverse");
			
			}
		});	
		//滚动监听与点击begin的效果
		/*$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
				&& location.hostname == this.hostname) {			
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');				
				if (target.length) {					
					$('html, body').animate({
						scrollTop: target.offset().top - topOffset
					}, 1000);
					return false;
				}
			}
		}); */
		
	})