let earthMoisture = 0
led.setBrightness(48)
let soundPlayed = 0
basic.setLedColor(basic.rgbw(
10,
10,
0,
0
))
/**
 * https://docs.m5stack.com/#/en/unit/earth
 */
basic.forever(function () {
    earthMoisture = pins.analogReadPin(AnalogPin.C16)
    if (earthMoisture > 700) {
        basic.setLedColor(basic.rgbw(
        0,
        0,
        10,
        0
        ))
        images.iconImage(IconNames.Umbrella).showImage(0)
        if (soundPlayed != 1) {
            music.playMelody("C5 A F C C - - - ", 240)
            soundPlayed = 1
        }
    } else if (earthMoisture < 200) {
        basic.setLedColor(basic.rgbw(
        10,
        0,
        0,
        0
        ))
        images.iconImage(IconNames.Sad).showImage(0)
        if (soundPlayed != 2) {
            music.playMelody("C5 - C5 - C5 - - - ", 600)
            soundPlayed = 2
        }
    } else {
        basic.setLedColor(basic.rgbw(
        0,
        10,
        0,
        0
        ))
        images.iconImage(IconNames.Happy).showImage(0)
        if (soundPlayed != 3) {
            music.playMelody("B - B B - C5 C5 - ", 300)
            soundPlayed = 3
        }
    }
    serial.writeLine("C16:")
    serial.writeNumber(earthMoisture)
    control.waitMicros(500000)
})
