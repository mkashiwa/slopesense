let direct = 0
input.calibrateCompass()
basic.forever(function () {
    direct = input.compassHeading()
    serial.writeLine("Pitch: " + input.rotation(Rotation.Pitch) + " deg")
    serial.writeLine("Roll : " + input.rotation(Rotation.Roll) + " deg")
    serial.writeLine("Temp : " + input.temperature() + " deg")
    serial.writeLine("Direc: " + direct + " deg")
    serial.writeLine("MagnX: " + input.magneticForce(Dimension.X) + " uT")
    serial.writeLine("MagnY: " + input.magneticForce(Dimension.Y) + " uT")
    serial.writeLine("MagnZ: " + input.magneticForce(Dimension.Z) + " uT")
    serial.writeLine("----------")
    basic.pause(1000)
})
