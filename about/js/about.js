$('document').ready(function(){
	$(document).scroll(function(e){
		if($(this).scrollTop()<100){
			$('.about').css({'height':'100px','border-bottom':'none'})
		}
		if($(this).scrollTop()>100){
			$('.about').css({'height':'60px','border-bottom':'1px solid #333'})
		}
		if($(this).scrollTop()<790){
			$('.p1,.p2,.p3,.p4').css({'width':'0%',})
		}
		if($(this).scrollTop()>790){
			$('.p1').css({'width':'80%',})
		}
		if($(this).scrollTop()>790){
			$('.p2').css({'width':'90%',})
		}
		if($(this).scrollTop()>790){
			$('.p3').css({'width':'75%',})
		}
		if($(this).scrollTop()>790){
			$('.p4').css({'width':'82%',})
		}
	})
})


