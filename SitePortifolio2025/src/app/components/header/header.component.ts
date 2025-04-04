import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, EventEmitter, Inject, Output, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output() lgpdClick = new EventEmitter<void>();

  activeSection: string = 'Topo';
  sections = ['Topo', 'Sobre', 'Contato', 'LGPD'];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });
      }, { threshold: 0.6 });

      this.sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }
  }

  scrollTo(id: string) {
    if (id === 'LGPD') {
      this.lgpdClick.emit(); // dispara evento para abrir modal
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      setTimeout(() => {
        const delayedEl = document.getElementById(id);
        if (delayedEl) {
          delayedEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }

}
