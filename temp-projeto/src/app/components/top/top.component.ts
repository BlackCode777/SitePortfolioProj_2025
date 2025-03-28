import { Component } from '@angular/core';

@Component({
  selector: 'app-top',
  imports: [],
  templateUrl: './top.component.html',
  styleUrl: './top.component.css'
})
export class TopComponent {

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

}
