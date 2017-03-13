$('document').ready(function(){
	$(document).scroll(function(e){
		if($(this).scrollTop()<100){
			$('.about').css({'height':'100px','border-bottom':'none'})
		}
		if($(this).scrollTop()>100){
			$('.about').css({'height':'60px','border-bottom':'1px solid #333'})
		}
		if($(this).scrollTop()>400){
			$('.p1').css({'width':'80%',})
		}
		if($(this).scrollTop()>400){
			$('.p2').css({'width':'90%',})
		}
		if($(this).scrollTop()>450){
			$('.p3').css({'width':'75%',})
		}
		if($(this).scrollTop()>450){
			$('.p4').css({'width':'82%',})
		}
	})
})

var runOnce = false
$('document').ready(function(){
  var AnimateNumber = function(){
    $('.count').each(function () {
      $(this).prop('Counter',0).animate({ //class counter 值設為0
      Counter: $(this).text()
      }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now)); //讀取現在的值
          }
        });
    });
  }
  $(document).scroll(function(e){
    if($(this).scrollTop()>2200){
      if(!runOnce) {
        runOnce = true
        AnimateNumber()
      }
    }
  })
})







