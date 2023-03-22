input.onButtonPressed(Button.B, function () {
    ESP8266_IoT.setData(
    "77BNXKRFT8RR2TID",
    5
    )
    ESP8266_IoT.uploadData()
})
basic.showIcon(IconNames.Square)
IoT_Bit_naim.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
IoT_Bit_naim.connectWifi("A12", "ubuy9109")
if (IoT_Bit_naim.wifiState(true)) {
    basic.showIcon(IconNames.Yes)
    IoT_Bit_naim.connectThingSpeak()
    if (IoT_Bit_naim.thingSpeakState(true)) {
        basic.showIcon(IconNames.Happy)
    }
}
