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

$('document').ready(function(){
	$(function () {
        var fx = function fx() {
          var dfd = $(".count").map(function (i, el) {
              var data = parseInt(this.dataset.n, 10);
              var props = {
                "from": {
                    "count": 0
                },
                "to": {
                    "count": data
                }
              };
            return $(props.from).animate(props.to, {
                duration: 3000 * 1,
                step: function (now, fx) {
                    $(el).text(Math.ceil(now));
                },
                complete: function() {
                   if (el.dataset.sym !== undefined) {
                  el.textContent = el.textContent.concat(el.dataset.sym)
                   }
                }
            }).promise();
        }).toArray();
            // return jQuery promise when all animations complete
            return $.when.apply($, dfd);
        };      
        var reset = function reset() {
          console.log($(this).scrollTop());
            // do stuff when window `.scrollTop()` > 75
            if ($(this).scrollTop() > 2200) {
              // turn off scroll event so `fx` not called
              // during ongoing animation
              $(this).off("scroll");
                // when all animations complete
                fx()
            }
        };
        // if `fx` should only be called once ,
        // change `.on()` to `.one()` ,
        // remove `.then()` callback following `fx()`
        // within `reset`
        $(window).on("scroll", reset);
    });
}) 







