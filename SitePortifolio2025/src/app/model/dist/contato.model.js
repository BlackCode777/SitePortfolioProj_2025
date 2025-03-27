"use strict";
exports.__esModule = true;
exports.Contato = void 0;
var Contato = /** @class */ (function () {
    function Contato(nome, email, mensagem) {
        this.nome = nome;
        this.email = email;
        this.mensagem = mensagem;
    }
    // Getters e Setters
    Contato.prototype.getNome = function () {
        return this.nome;
    };
    Contato.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Contato.prototype.getEmail = function () {
        return this.email;
    };
    Contato.prototype.setEmail = function (email) {
        this.email = email;
    };
    Contato.prototype.getMensagem = function () {
        return this.mensagem;
    };
    Contato.prototype.setMensagem = function (mensagem) {
        this.mensagem = mensagem;
    };
    // Métodos para validação dos campos, método recebe um campo e retorna um boolean
    Contato.prototype.validarNome = function (nome) {
        return nome.length >= 5 && nome.length <= 100 ? true : false;
    };
    Contato.prototype.validarEmail = function (email) {
        return email.length >= 5 && email.length <= 100 ? true : false;
    };
    Contato.prototype.validarMensagem = function (mensagem) {
        return mensagem.length >= 5 && mensagem.length <= 1000 ? true : false;
    };
    return Contato;
}());
exports.Contato = Contato;
