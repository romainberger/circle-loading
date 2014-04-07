# Circle Loading

Animation to draw a circle around an element (jQuery plugin).

[Demo](http://romainberger.github.io/circle-loading)

## Installation

Drop jQuery and the file `circle-loading.js` in your page.

With bower:

    bower install circle-loading

## Usage

    var span = $('span')

    // Initialisation
    span.circleLoading()

    // Start the animation
    span.circleLoading('start')

    // Stop the animation
    span.circleLoading('stop')

You can find a complete working example in the `gh-pages` branch.

## Options

You can set some options while initializing the plugin:

    var span = $('span')

    span.circleLoading({
        strokeStyle: '#f00'
      , speed:       30
    })

Complete list of options available:

* ***speed***: Speed of the animation - default to 10ms
* ***lineWidth***: Width of the line - default to 1
* ***strokeStyle***: Color of the line - default to `#000`
* ***fade***: Use a fade in / fade out - default to `true`
* ***speedFadeIn***: Speed of the fade at the beginning in milliseconds - default to 300
* ***speedFadeOut***: Speed of the fade at the end in milliseconds - default to 300
* ***stopOnComplete***: Determine if the animation is supposed to be looped or stops when the circle is complete - default to false (loop)


### Methods

You can also update some options after the initializing - including while the animation is running

    // Change the color of the line
    span.circleLoading('strokeStyle', '#0f0')

    // Change the speed of the animation
    span.circleLoading('speed', 10)

## Compatibility

The plugin works with canvas so it will need a [relatively recent browser](http://caniuse.com/#search=canvas).

# License

MIT
