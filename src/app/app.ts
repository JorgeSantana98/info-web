import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './shared/nav-bar/nav-bar';
import { Footer } from './shared/footer/footer';
import { HomePage } from './pages/home-page/home-page';
import { ServicesPage } from './pages/services-page/services-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Footer, HomePage, ServicesPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'info-web';
}
