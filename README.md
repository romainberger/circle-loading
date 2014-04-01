# Circle Loading

Animation to draw a circle around an element (jQuery plugin).

**Warning** Still in development so there's probably a crapload of bugs (including the size)

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

You can also update some options after the initializing - including while the animation is running

    span.circleLoading('strokeStyle', '#0f0')

## Compatibility

The plugin works with canvas so it will need a [relatively recent browser](http://caniuse.com/#search=canvas).

# License

MIT
