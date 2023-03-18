ESP8266_IoT_naim.on_HTTP_recevid(function (HTTP_Status_Code, Data) {
    basic.showString("hhh")
})
ESP8266_IoT_naim.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT_naim.connectWifi("Ooredoo 4G_DE143A", "21554265")
ESP8266_IoT_naim.connectThingSpeak()
basic.forever(function () {
	
})
