import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    CategoriesComponent,
    BodyComponent,
    CarouselComponent,
    FooterComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_research';
}
