"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactComponent = void 0;
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var contato_model_1 = require("../../model/contato.model");
var contato_service_1 = require("../../service/contato.service");
var info_lgpd_component_1 = require("../LGPD/info-lgpd/info-lgpd.component");
var ContactComponent = /** @class */ (function () {
    function ContactComponent(contatoService) {
        this.contatoService = contatoService;
        this.nome = '';
        this.email = '';
        this.mensagem = '';
    }
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent.prototype.sendEmail = function () {
        var contato = new contato_model_1.Contato(this.nome, this.email, this.mensagem);
        this.contatoService.sendEmail(contato).subscribe({
            next: function (data) { return console.log('Enviado:', data); },
            error: function (err) { return console.error('Erro:', err); }
        });
    };
    ContactComponent.prototype.onSubmit = function (event) {
        event.preventDefault();
        this.sendEmail();
        alert('Mensagem enviada com sucesso!');
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            imports: [
                forms_1.FormsModule,
                http_1.HttpClientModule,
                common_1.CommonModule,
                info_lgpd_component_1.InfoLGPDComponent
            ],
            providers: [
                contato_service_1.ContatoService
            ],
            templateUrl: './contact.component.html',
            styleUrl: './contact.component.css'
        })
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
