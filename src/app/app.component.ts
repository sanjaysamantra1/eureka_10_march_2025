import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { CategoriesComponent } from "./Components/categories/categories.component";
import { CarouselComponent } from "./Components/carousel/carousel.component";
import { BodyComponent } from "./Components/body/body.component";
import { FooterComponent } from "./Components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent, CategoriesComponent, CarouselComponent, BodyComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Project';
}
