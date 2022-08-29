let time = 0
let strip = neopixel.create(DigitalPin.P0, 64, NeoPixelMode.RGB)
strip.setBrightness(100)
strip.showRainbow(200, 360)
basic.forever(function () {
    strip.shift(1)
    time = 5
    strip.rotate(2)
    strip.show()
    for (let index = 0; index <= 10; index++) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Indigo))
    }
})
