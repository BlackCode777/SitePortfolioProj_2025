"use strict";
exports.__esModule = true;
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app/app.component");
var app_config_1 = require("./app/app.config");
platform_browser_1.bootstrapApplication(app_component_1.AppComponent, app_config_1.appConfig)["catch"](function (err) { return console.error(err); });
