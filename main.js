!function($) {

  'use strict';

  var span = $('span')

  span.circleLoading({
    strokeStyle: '#fff',
    speedFadeOut: 700,
    speed: 5
  })

  var running = false

  span.click(function() {
    if (running) {
      span.circleLoading('stop')
      running = false
    }
    else {
      span.circleLoading('start')
      running = true
    }
  })

}(window.jQuery);
