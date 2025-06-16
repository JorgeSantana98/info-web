import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Cierra el menú cuando el usuario presiona la tecla ESC
  @HostListener('document:keydown.escape')
  onEscKey() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  // Cierra el menú si se redimensiona la ventana a tamaño de escritorio (>= 1024px)
  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 1024 && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
}
