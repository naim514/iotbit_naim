input.onButtonPressed(Button.A, function () {
    IoT_Bit_naim.sendGenericHttp(
    IoT_Bit_naim.httpMethod.GET,
    "https://api.thingspeak.com/channels/1028055/feeds.json?api_key=1IFCE89OOGQ27NXI&results=1",
    ""
    )
})
IoT_Bit_naim.on_HTTP_recevid(function (HTTP_Status_Code, Data) {
    basic.showString(IoT_Bit_naim.get_value("wsdf", Data))
})
basic.showIcon(IconNames.Square)
IoT_Bit_naim.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
IoT_Bit_naim.connectWifi("A12", "ubuy9109")
