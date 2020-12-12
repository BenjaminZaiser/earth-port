let earthMoisture = 0
basic.forever(function () {
    earthMoisture = pins.analogReadPin(AnalogPin.C16)
    if (earthMoisture > 500) {
        images.iconImage(IconNames.Umbrella).showImage(0)
        music.playMelody("C5 A F C C C C C ", 240)
    } else {
        images.iconImage(IconNames.Happy).showImage(0)
        music.playMelody("B - B B - C5 C5 C5 ", 300)
    }
    serial.writeLine("C16:")
    serial.writeNumber(0)
    control.waitMicros(500000)
})
