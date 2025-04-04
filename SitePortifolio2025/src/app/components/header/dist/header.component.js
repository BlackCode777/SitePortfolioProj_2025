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
exports.HeaderComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(platformId) {
        this.platformId = platformId;
        this.lgpdClick = new core_1.EventEmitter();
        this.activeSection = 'Topo';
        this.sections = ['Topo', 'Sobre', 'Contato', 'LGPD'];
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (common_1.isPlatformBrowser(this.platformId)) {
            var observer_1 = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        _this.activeSection = entry.target.id;
                    }
                });
            }, { threshold: 0.6 });
            this.sections.forEach(function (id) {
                var el = document.getElementById(id);
                if (el)
                    observer_1.observe(el);
            });
        }
    };
    HeaderComponent.prototype.scrollTo = function (id) {
        if (id === 'LGPD') {
            this.lgpdClick.emit(); // dispara evento para abrir modal
            return;
        }
        var el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        else {
            setTimeout(function () {
                var delayedEl = document.getElementById(id);
                if (delayedEl) {
                    delayedEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        }
    };
    __decorate([
        core_1.Output()
    ], HeaderComponent.prototype, "lgpdClick");
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            imports: [common_1.CommonModule],
            templateUrl: './header.component.html',
            styleUrl: './header.component.css'
        }),
        __param(0, core_1.Inject(core_1.PLATFORM_ID))
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
