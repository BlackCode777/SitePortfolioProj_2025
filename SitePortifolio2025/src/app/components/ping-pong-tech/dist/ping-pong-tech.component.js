"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PingPongTechComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var PingPongTechComponent = /** @class */ (function () {
    function PingPongTechComponent(renderer, elRef) {
        this.renderer = renderer;
        this.elRef = elRef;
    }
    PingPongTechComponent.prototype.ngAfterViewInit = function () {
        this.startPacmanAnimation();
    };
    PingPongTechComponent.prototype.startPacmanAnimation = function () {
        var _this = this;
        var pacman = this.elRef.nativeElement.querySelector('#pacman');
        var logos = Array.from(this.elRef.nativeElement.querySelectorAll('.logo'));
        var speed = 2; // Velocidade do Pacman
        var pacmanWidth = pacman.offsetWidth;
        var containerWidth = this.elRef.nativeElement.querySelector('.bouncer-container').offsetWidth;
        var positionX = 0;
        var direction = 1; // 1: indo, -1: voltando
        var resetLogos = function () {
            logos.forEach(function (logo) {
                logo.classList.remove('eaten');
                _this.renderer.setStyle(logo, 'opacity', '1');
            });
        };
        var movePacman = function () {
            positionX += speed * direction;
            pacman.style.left = positionX + "px";
            pacman.style.transform = direction === 1 ? 'scaleX(1)' : 'scaleX(-1)'; // vira o pacman
            logos.forEach(function (logo) {
                if (!logo.classList.contains('eaten')) {
                    var pacmanRect = pacman.getBoundingClientRect();
                    var logoRect = logo.getBoundingClientRect();
                    var collided = pacmanRect.right >= logoRect.left &&
                        pacmanRect.left <= logoRect.right &&
                        pacmanRect.top <= logoRect.bottom &&
                        pacmanRect.bottom >= logoRect.top;
                    if (collided) {
                        logo.classList.add('eaten');
                        _this.renderer.setStyle(logo, 'transition', 'opacity 0.4s ease-in-out');
                        _this.renderer.setStyle(logo, 'opacity', '0');
                    }
                }
            });
            var reachedRightEnd = direction === 1 && (positionX + pacmanWidth >= containerWidth);
            var reachedLeftEnd = direction === -1 && positionX <= 0;
            if (reachedRightEnd) {
                direction = -1; // muda direção para voltar
            }
            else if (reachedLeftEnd) {
                direction = 1; // muda direção para ir
                resetLogos(); // bolinhas reaparecem na nova ida
            }
            requestAnimationFrame(movePacman);
        };
        requestAnimationFrame(movePacman);
    };
    PingPongTechComponent = __decorate([
        core_1.Component({
            selector: 'app-ping-pong-tech',
            standalone: true,
            imports: [
                common_1.CommonModule
            ],
            templateUrl: './ping-pong-tech.component.html',
            styleUrl: './ping-pong-tech.component.css'
        })
    ], PingPongTechComponent);
    return PingPongTechComponent;
}());
exports.PingPongTechComponent = PingPongTechComponent;
