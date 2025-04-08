import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentsComponent } from './components/contents/contents.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    // ContentsComponent,
    BodyComponent,
    // CarouselComponent,
    // FooterComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_project_one';
}
