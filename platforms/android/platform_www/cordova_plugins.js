cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-appversion.RareloopAppVersion",
    "file": "plugins/cordova-plugin-appversion/www/app-version.js",
    "pluginId": "cordova-plugin-appversion",
    "clobbers": [
      "AppVersion"
    ]
  },
  {
    "id": "cordova-plugin-firebase.FirebasePlugin",
    "file": "plugins/cordova-plugin-firebase/www/firebase.js",
    "pluginId": "cordova-plugin-firebase",
    "clobbers": [
      "FirebasePlugin"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-appversion": "1.0.0",
  "cordova-plugin-firebase": "1.0.5",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});