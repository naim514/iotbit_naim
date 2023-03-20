input.onButtonPressed(Button.A, function () {
    ESP82668_IoT_naim.sendGenericHttp(
    ESP82668_IoT_naim.httpMethod.GET,
    "https://api.thingspeak.com/channels/1028055/feeds.json?api_key=1IFCE89OOGQ27NXI&results=1",
    ""
    )
})
ESP82668_IoT_naim.on_HTTP_recevid(function (HTTP_Status_Code, Data) {
    basic.showString(ESP82668_IoT_naim.get_value("field1", ESP82668_IoT_naim.get_value("feeds", "https://api.thingspeak.com/channels/1028055/feeds.json?api_key=1IFCE89OOGQ27NXI&results=1")))
})
basic.showIcon(IconNames.Heart)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("Ooredoo 4G_DE143A", "21554265")
ESP8266_IoT.connectThingSpeak()
if (ESP8266_IoT.wifiState(true)) {
    basic.showIcon(IconNames.Yes)
}
if (ESP8266_IoT.thingSpeakState(true)) {
    basic.showIcon(IconNames.Happy)
}
