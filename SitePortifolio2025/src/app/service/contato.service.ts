import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contato } from '../model/contato.model';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  apiServer = 'http://localhost:8080/siteportifolio-serviceemail/contact/send';

  constructor(
    private http: HttpClient
  ) { }

  sendEmail(contato: Contato): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(this.apiServer, contato);
  }


}
