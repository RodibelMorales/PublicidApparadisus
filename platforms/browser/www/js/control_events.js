$(document).on("ready",function(){


	//Controla tiempo finaliza video
	//$("#testgetimevideo").on('ended', function(){
	//	alert('El video ha finalizado!!!');
	//});
    //initialize efecto swipe cuando es un dispositivo mobile 
  	$("#carousel-publicidad").swiperight(function() {  
    	$(this).carousel('prev');  
	});  
	$("#carousel-publicidad").swipeleft(function() {  
		$(this).carousel('next');  
	}); 
	//Asigna Time personalizado por imagen
	var extension = {
	  cycle: function(e, extra) {
	    e || (this.paused = false)

	    this.interval && clearTimeout(this.interval)

	    var nextInterval;
	    var $active = this.$element.find('.item.active')
	    if (!extra) {
	      nextInterval = $active.data("duration") || this.options.interval;
	    } else {
	      var $next = this.getItemForDirection('next', $active)
	      nextInterval = $next.data("duration") || this.options.interval;
	    }

	    //console.log(nextInterval);

	    !this.paused && (this.interval = setTimeout($.proxy(this.nextProxy, this), nextInterval))

	    return this
	  },
	  pause: function(e) {
	    e || (this.paused = true)

	    if (this.$element.find('.next, .prev').length && $.support.transition) {
	      this.$element.trigger($.support.transition.end)
	      this.cycle(true)
	    }
	    this.interval = clearTimeout(this.interval)

	    return this
	  },
	  nextProxy: function() {
	    this.next()
	    this.cycle(true, true)
	  }
	}
	$.extend($["fn"]["carousel"]["Constructor"].prototype, extension);
	$(function() {
	  $('#carousel-publicidad').carousel();
	});


});
	function redireccionar(){
	  $(location).attr('href',"index.html");
	} 