input.onButtonPressed(Button.A, function () {
    IoT_Bit_naim.sendGenericHttp(
    IoT_Bit_naim.httpMethod.GET,
    "https://api.thingspeak.com/channels/1028055/feeds.json?api_key=1IFCE89OOGQ27NXI&results=1",
    ""
    )
})
IoT_Bit_naim.on_HTTP_recevid(function (HTTP_Status_Code, Data) {
    basic.showString(IoT_Bit_naim.get_value("field1", IoT_Bit_naim.get_value("feeds", Data)))
})
basic.showIcon(IconNames.Heart)
IoT_Bit_naim.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
IoT_Bit_naim.connectWifi("Ooredoo 4G_DE143A", "21554265")
if (IoT_Bit_naim.wifiState(true)) {
    basic.showIcon(IconNames.Yes)
    IoT_Bit_naim.connectThingSpeak()
    if (IoT_Bit_naim.thingSpeakState(true)) {
        basic.showIcon(IconNames.Happy)
    }
}

