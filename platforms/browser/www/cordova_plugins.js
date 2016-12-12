cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com-badrit-macaddress/www/MacAddress.js",
        "id": "com-badrit-macaddress.MacAddress",
        "pluginId": "com-badrit-macaddress",
        "clobbers": [
            "window.MacAddress"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/src/browser/InAppBrowserProxy.js",
        "id": "cordova-plugin-inappbrowser.InAppBrowserProxy",
        "pluginId": "cordova-plugin-inappbrowser",
        "merges": [
            ""
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-networkinterface/www/networkinterface.js",
        "id": "cordova-plugin-networkinterface.networkinterface",
        "pluginId": "cordova-plugin-networkinterface",
        "clobbers": [
            "window.networkinterface"
        ]
    },
    {
        "file": "plugins/com-badrit-macaddress/www/MacAddress.js",
        "id": "com-badrit-macaddress.MacAddress",
        "pluginId": "com-badrit-macaddress",
        "clobbers": [
            "window.MacAddress"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com-badrit-macaddress": "0.2.0",
    "cordova-plugin-inappbrowser": "1.3.0",
    "cordova-plugin-device": "1.1.3",
    "cordova-plugin-networkinterface": "1.0.8"
}
// BOTTOM OF METADATA
});