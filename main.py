def on_forever():
    serial.write_line("Pitch: " + str(input.rotation(Rotation.PITCH)))
    serial.write_line("Roll : " + str(input.rotation(Rotation.ROLL)))
    serial.write_line("----------")
    basic.pause(1000)
basic.forever(on_forever)
