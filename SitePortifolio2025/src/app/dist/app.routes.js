"use strict";
exports.__esModule = true;
exports.routes = void 0;
exports.routes = [
    { path: '', loadComponent: function () { return Promise.resolve().then(function () { return require('./HOME/home.component'); }).then(function (m) { return m.HOMEComponent; }); } },
];
