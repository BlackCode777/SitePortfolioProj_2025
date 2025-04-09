import { Component } from '@angular/core';
import { PingPongTechComponent } from "../ping-pong-tech/ping-pong-tech.component";

@Component({
  selector: 'app-about',
  imports: [PingPongTechComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
