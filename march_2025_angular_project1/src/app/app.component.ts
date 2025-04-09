import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './header/header/header.component';
@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    CategoriesComponent,
    // CarouselComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'march_2025_angular_project1';
}
