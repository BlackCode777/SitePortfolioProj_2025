import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-info-lgpd',
  imports: [],
  templateUrl: './info-lgpd.component.html',
  styleUrl: './info-lgpd.component.css'
})
export class InfoLGPDComponent {

  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

}
