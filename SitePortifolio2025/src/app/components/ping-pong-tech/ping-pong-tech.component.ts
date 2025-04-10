import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-ping-pong-tech',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './ping-pong-tech.component.html',
  styleUrl: './ping-pong-tech.component.css'
})
export class PingPongTechComponent implements AfterViewInit {

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.startPacmanAnimation();
  }

  startPacmanAnimation() {
    const pacman = this.elRef.nativeElement.querySelector('#pacman') as HTMLImageElement;
    const logos = Array.from(this.elRef.nativeElement.querySelectorAll('.logo')) as HTMLImageElement[];

    const speed = 2; // Velocidade do Pacman
    const pacmanWidth = pacman.offsetWidth;
    const containerWidth = this.elRef.nativeElement.querySelector('.bouncer-container').offsetWidth;

    let positionX = 0;
    let direction = 1; // 1: indo, -1: voltando

    const resetLogos = () => {
      logos.forEach(logo => {
        logo.classList.remove('eaten');
        this.renderer.setStyle(logo, 'opacity', '1');
      });
    };

    const movePacman = () => {
      positionX += speed * direction;
      pacman.style.left = `${positionX}px`;
      pacman.style.transform = direction === 1 ? 'scaleX(1)' : 'scaleX(-1)'; // vira o pacman

      logos.forEach((logo) => {
        if (!logo.classList.contains('eaten')) {
          const pacmanRect = pacman.getBoundingClientRect();
          const logoRect = logo.getBoundingClientRect();

          const collided = pacmanRect.right >= logoRect.left &&
            pacmanRect.left <= logoRect.right &&
            pacmanRect.top <= logoRect.bottom &&
            pacmanRect.bottom >= logoRect.top;

          if (collided) {
            logo.classList.add('eaten');
            this.renderer.setStyle(logo, 'transition', 'opacity 0.4s ease-in-out');
            this.renderer.setStyle(logo, 'opacity', '0');
          }
        }
      });

      const reachedRightEnd = direction === 1 && (positionX + pacmanWidth >= containerWidth);
      const reachedLeftEnd = direction === -1 && positionX <= 0;

      if (reachedRightEnd) {
        direction = -1; // muda direção para voltar
      } else if (reachedLeftEnd) {
        direction = 1; // muda direção para ir
        resetLogos();  // bolinhas reaparecem na nova ida
      }

      requestAnimationFrame(movePacman);
    };

    requestAnimationFrame(movePacman);
  }

}
