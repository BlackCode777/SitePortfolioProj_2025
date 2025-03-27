"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.AppComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var about_component_1 = require("./components/about/about.component");
var contact_component_1 = require("./components/contact/contact.component");
var footer_component_1 = require("./components/footer/footer.component");
var header_component_1 = require("./components/header/header.component");
var top_component_1 = require("./components/top/top.component");
var AppComponent = /** @class */ (function () {
    function AppComponent(platformId) {
        this.platformId = platformId;
        this.title = 'SitePortifolio2025';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (common_1.isPlatformBrowser(this.platformId)) {
            setTimeout(function () {
                var navLinks = document.querySelectorAll('#nav a');
                navLinks.forEach(function (link) {
                    link.addEventListener('click', function (e) {
                    });
                });
            }, 100);
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            imports: [router_1.RouterOutlet,
                about_component_1.AboutComponent,
                footer_component_1.FooterComponent,
                contact_component_1.ContactComponent,
                top_component_1.TopComponent,
                header_component_1.HeaderComponent,
            ],
            templateUrl: './app.component.html'
        }),
        __param(0, core_1.Inject(core_1.PLATFORM_ID))
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
