/**
 * Circle Loading
 *
 * @author Romain Berger <romain@romainberger.com>
 * @license MIT
 * https://github.com/romainberger/circle-loading
 *
 * Animation to draw a circle around an element
 *
 * Usage:
 *     var span = $('span')
 *     // init the circle
 *     span.circleLoading()
 *
 *     // start the animation
 *     span.circleLoading('start')
 *     // stop the animation
 *     span.circleLoading('stop')
 *
 *     // change the speed
 *     span.circleLoading('speed', 30)
 *     // change the stroke style
 *     span.circleLoading('strokeStyle', '#f00')
 */
!function($) {

  'use strict';

  var CircleLoading = function(element, options) {
    this.$element = $(element)
    this.options  = options

    this.width = this.$element.width()
    this.canvas
    this.$canvas
    this.ctx
    this.size = this.width + 8
    this.position = (this.size - this.width) / 2

    this.running
    this.i

    this.init()
    this.initialized = true
  }

  CircleLoading.prototype = {
    /**
     * Creates the canvas
     */
    init: function() {
      var canvas   = $('<canvas/>')
      this.canvas  = canvas[0]
      this.$canvas = $(this.canvas)

      this.canvas.width  = this.size
      this.canvas.height = this.size

      this.$canvas.css({
          position: 'absolute'
        , top: '-'+this.position+'px'
        , left: '-'+this.position+'px'
      })

      this.$element.append(this.canvas)

      this.ctx = this.canvas.getContext('2d')
    },

    /**
     * Start the animation
     */
    start: function() {
      this.i = 0
      this.running = true

      if (this.options.fade) {
        this.$canvas.fadeIn(this.options.speedFadeIn)
      }
      else {
        this.$canvas.show()
      }
      this._cycle()
    },

    /**
     * Loop to draw / erase the line
     */
    _cycle: function() {
      if (!this.running) {
        return
      }

      this.ctx.beginPath()
      if (this.i <= 2) {
        this._draw()
      }
      else if (!this.options.stopOnComplete) {
        this._erase()
      }
      this.ctx.lineWidth   = this.options.lineWidth
      this.ctx.strokeStyle = this.options.strokeStyle
      this.ctx.stroke()

      if (this._round(this.i) === 2 && this.options.stopOnComplete) {
        this.stop()
      }

      if (this._round(this.i) >= 4) {
        this.i = 0
      }
      else {
        this.i += 0.01
      }

      var self = this

      if (this.running) {
        setTimeout(function() {
          self._cycle.call(self)
        }, this.options.speed)
      }
    },

    /**
     * Draw the circle
     */
    _draw: function() {
      if (this._round(this.i) > Math.PI * 1.5) {
        return
      }
      this.ctx.arc(this.size / 2, this.size / 2, (this.width / 2) + 4, -1.5, Math.PI * this.i - 1.5, false)
    },

    /**
     * Erase the circle
     */
    _erase: function() {
      var i = this.i - 2
      if (this._round(i) > 2) {
        return
      }
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx.arc(this.size / 2, this.size / 2, (this.width / 2) + 4, Math.PI * i -1.5, -1.5, false)
    },

    /**
     * Stop the animation
     */
    stop: function() {
      var self =this

      this.running = false

      if (this.options.fade) {
        this.$canvas.fadeOut(this.options.speedFadeOut).promise().done(function() {
          self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height)
        })
      }
      else {
        this.$canvas.hide()
        self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height)
      }
    },

    /**
     * Update the speed option
     * @param {integer} speed
     */
    speed: function(speed) {
      this.options.speed = speed
    },

    /**
     * Update the stroke style option
     * @param {string} style
     */
    strokeStyle: function(style) {
      this.options.strokeStyle = style
    },

    /**
     * #loljs
     */
    _round: function(i) {
      return Math.floor(i * 100) / 100
    }
  }

  $.fn.circleLoading = function(param, args) {
    param = param || false
    args  = args  || false
    var action  = false
      , options = false

    if (param && typeof param === 'string') {
      action = param
    }
    else if (param && typeof param === 'object') {
      options = param
    }

    return this.each(function() {
      this.circle

      if (action) {
        if (typeof this.circle === 'undefined' || !this.circle.initialized) {
          console.error('CircleLoading object not initialized')
        }
        this.circle[action].call(this.circle, args)
      }
      else {
        options = $.extend({}, $.fn.circleLoading.defaults, typeof options === 'object' && options)
        this.circle = new CircleLoading(this, options)
      }
    })
  }

  $.fn.circleLoading.defaults = {
      speed: 10
    , lineWidth: 1
    , strokeStyle: '#000'
    , fade: true
    , speedFadeIn: 300
    , speedFadeOut: 300
    , stopOnComplete: false
  }

}(window.jQuery);
