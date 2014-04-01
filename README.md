# Circle Loading

Animation to draw a circle around an element (jQuery plugin).

[Demo](http://???)

## Installation

Drop jQuery and the source in your page.

## Usage

    var span = $('span')

    // Initilisation
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
