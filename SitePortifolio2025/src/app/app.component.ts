import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { TopComponent } from "./components/top/top.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    TopComponent,
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
