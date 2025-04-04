import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AboutComponent } from "../components/about/about.component";
import { ContactComponent } from "../components/contact/contact.component";
import { TopComponent } from "../components/top/top.component";

@Component({
  selector: 'app-home',
  imports: [TopComponent, AboutComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HOMEComponent {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const el = document.getElementById(fragment);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    });
  }

}
