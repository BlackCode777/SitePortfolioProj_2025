import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contato } from '../../model/contato.model';
import { ContatoService } from '../../service/contato.service';

@Component({
  selector: 'app-contact',
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    ContatoService
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  nome: string = '';
  email: string = '';
  mensagem: string = '';

  constructor(
    private contatoService: ContatoService
  ) { }

  ngOnInit() { }

  sendEmail() {
    const contato: Contato = new Contato(this.nome, this.email, this.mensagem);

    this.contatoService.sendEmail(contato).subscribe({
      next: data => console.log('Enviado:', data),
      error: err => console.error('Erro:', err)
    });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.sendEmail();
    alert('Mensagem enviada com sucesso!');
  }

}
