$('document').ready(function(){
	$(document).scroll(function(e){
		if($(this).scrollTop()<100){
			$('.about').css({'height':'100px','border-bottom':'none'})
		}
		if($(this).scrollTop()>100){
			$('.about').css({'height':'60px','border-bottom':'1px solid #333'})
		}
		if($(this).scrollTop()<790){
			$('.percent').css({'width':'0%',})
		}
		if($(this).scrollTop()>790){
			$('.percent').css({'width':'80%',})
		}
	})
})


