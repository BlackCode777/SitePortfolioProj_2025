import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    FooterComponent,
    HeaderComponent,

  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'SitePortifolio2025';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const navLinks = document.querySelectorAll('#nav a');
        navLinks.forEach(link => {
          link.addEventListener('click', (e) => {
          });
        });
      }, 100);
    }
  }

}
