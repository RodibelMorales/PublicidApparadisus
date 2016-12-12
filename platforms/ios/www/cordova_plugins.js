cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "com-badrit-macaddress.MacAddress",
        "file": "plugins/com-badrit-macaddress/www/MacAddress.js",
        "pluginId": "com-badrit-macaddress",
        "clobbers": [
            "window.MacAddress"
        ]
    },
    {
        "id": "cordova-plugin-networkinterface.networkinterface",
        "file": "plugins/cordova-plugin-networkinterface/www/networkinterface.js",
        "pluginId": "cordova-plugin-networkinterface",
        "clobbers": [
            "window.networkinterface"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com-badrit-macaddress": "0.2.0",
    "cordova-plugin-networkinterface": "1.0.8"
};
// BOTTOM OF METADATA
});