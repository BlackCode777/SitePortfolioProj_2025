export class Contato {
  constructor(
    public nome: string,
    public email: string,
    public mensagem: string
  ) { }

  // Getters e Setters
  getNome() {
    return this.nome;
  }
  setNome(nome: string) {
    this.nome = nome;
  }

  getEmail() {
    return this.email;
  }
  setEmail(email: string) {
    this.email = email;
  }

  getMensagem() {
    return this.mensagem;
  }
  setMensagem(mensagem: string) {
    this.mensagem = mensagem;
  }

  // Métodos para validação dos campos, método recebe um campo e retorna um boolean
  validarNome(nome: string): boolean {
    return nome.length >= 5 && nome.length <= 100 ? true : false;
  }

  validarEmail(email: string): boolean {
    return email.length >= 5 && email.length <= 100 ? true : false;
  }

  validarMensagem(mensagem: string): boolean {
    return mensagem.length >= 5 && mensagem.length <= 1000 ? true : false;
  }

}
