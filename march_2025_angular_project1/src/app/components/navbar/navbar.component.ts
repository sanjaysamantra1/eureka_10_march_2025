import { Component } from '@angular/core';
import { BodyComponent } from '../body/body.component';
import { Assignment1Component } from '../assignment1/assignment1.component';
import { CategoriesComponent } from '../categories/categories.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { Assignmnet2Component } from '../assignmnet2/assignmnet2.component';
import { Assignment3Component } from '../assignment3/assignment3.component';
import { Assignment4PipesComponent } from '../assignment4-pipes/assignment4-pipes.component';
import { Assignment5Component } from '../assignment5/assignment5.component';
import { Assignment6Component } from '../assignment6/assignment6.component';
import { Assignment7Component } from '../../assignment7/assignment7.component';
import { Assignment8Component } from '../assignment8/assignment8.component';

@Component({
  selector: 'app-navbar',
  imports: [BodyComponent,Assignment1Component,CategoriesComponent,CarouselComponent,
    Assignmnet2Component,
    Assignment3Component,
    Assignment4PipesComponent,
    Assignment5Component,
    Assignment6Component,
    Assignment7Component,
    Assignment8Component

  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
assignments1 = true;
assignments2 = true;
assignment3 = true;
assignment4 = true;
assignment5 = true;
assignment6 = true;
assignment7 = true;
assignment8 = true;
carousal = false;

displayAssignmentByns = true;

Assignmnet6Switch()
{
  if(this.assignment6 == true)
    {
      this.assignment6 = false;
      this.assignments1 = true;
      this.assignments2 = true;
      this.assignment3 = true;
      this.assignment4 = true;
      this.assignment5 = true;
      this.carousal = true;
      this.assignment7 = true;
      this.assignment8 = true;
    }
    else
    {
      this.assignment6 = true;
      this.assignments1 = true;
      this.carousal = false;
      this.assignments2 = true;
      this.assignment3 = true;
      this.assignment4 = true;
      this.assignment5 = true;
      this.assignment7 = true;
      this.assignment8 = true;
    }
}


Assignmnet1Switch()
{
  if(this.assignments1 == true)
    {
      this.assignments1 = false;
      this.assignments2 = true;
      this.assignment3 = true;
      this.assignment4 = true;
      this.assignment5 = true;
      this.assignment6 = true;
      this.carousal = true;
      this.assignment7 = true;
      this.assignment8 = true;
    }
    else
    {
      this.assignments1 = true;
      this.carousal = false;
      this.assignments2 = true;
      this.assignment3 = true;
      this.assignment4 = true;
      this.assignment5 = true;
      this.assignment6 = true;
      this.assignment7 = true;
      this.assignment8 = true;
    }
}

Assignmnet2Switch()
{
  if(this.assignments2 == true)
    {
      this.assignments2 = false;
      this.assignments1 = true;
      this.assignment3 = true;
      this.assignment4 = true;
      this.assignment5 = true;
      this.assignment6 = true;
      this.carousal = true;
      this.assignment7 = true;
      this.assignment8 = true;
    }
    else
    {
      this.assignments2 = true;
      this.carousal = false;
      this.assignments1 = true;
      this.assignment3 = true;
      this.assignment4 = true;
      this.assignment5 = true;
      this.assignment6 = true;
      this.assignment7 = true;
      this.assignment8 = true;
    }
}

Assignmnet3Switch()
{
  if(this.assignment3 == true)
    {
      this.assignment3 = false;
      this.assignments1 = true;
      this.assignments2 = true;
      this.assignment4 = true;
      this.assignment5 = true;
      this.assignment6 = true;
      this.carousal = true;
      this.assignment7 = true;
      this.assignment8 = true;
    }
    else
    {
      this.assignment3 = true;
      this.carousal = false;
      this.assignments1 = true;
      this.assignments2 = true;
      this.assignment5 = true;
      this.assignment4 = true;
      this.assignment6 = true;
      this.assignment7 = true;
      this.assignment8 = true;
    }
}
Assignmnet4Switch()
{
  if(this.assignment4 == true)
    {
      this.assignment4 = false;
      this.assignments2 = true;
      this.assignment3 = true;
      this.assignments1 = true;
      this.assignment5 = true;
      this.assignment6 = true;
      this.carousal = true;
      this.assignment7 = true;
      this.assignment8 = true;
    }
    else
    {
      this.assignment4 = true;
      this.carousal = false;
      this.assignments1 = true;
      this.assignments2 = true;
      this.assignment5 = true;
      this.assignment3 = true;
      this.assignment6 = true;
      this.assignment7 = true;
      this.assignment8 = true;
    }
}

Assignmnet5Switch()
{
  if(this.assignment5 == true)
    {
      this.assignment5 = false;
      this.assignments2 = true;
      this.assignment3 = true;
      this.assignments1 = true;
      this.assignment4 = true;
      this.assignment6 = true;
      this.carousal = true;
      this.assignment7 = true;
      this.assignment8 = true;
    }
    else
    {
      this.assignment5 = true;
      this.carousal = false;
      this.assignments1 = true;
      this.assignments2 = true;
      this.assignment4 = true;
      this.assignment3 = true;
      this.assignment6 = true;
      this.assignment7 = true;
      this.assignment8 = true;
    }
}
displayAssignmentBtns()
{
  if(this.displayAssignmentByns==false)
  {
    this.displayAssignmentByns = true;
    this.carousal=false;
    this.assignments2 = true;
    this.assignment3 = true;
    this.assignments1 = true;
    this.assignment4 = true;
    this.assignment5 = true;
    this.assignment6 = true;
    this.assignment7 = true;
    this.assignment8 = true;
  }
  else
  {
    this.displayAssignmentByns = false;
    this.carousal = false;
    this.assignments2 = true;
    this.assignments1 = true;
    this.assignment3 = true;
    this.assignment4 = true;
    this.assignment5 = true;
    this.assignment6 = true;
    this.assignment7 = true;
    this.assignment8 = true;
  }
}


Assignmnet7Switch()
{
  if(this.assignment7 == true)
    {
      this.assignment7 = false;
      this.assignments1 = true;
      this.assignments2 = true;
      this.assignment3 = true;
      this.assignment4 = true;
      this.assignment5 = true;
      this.assignment6 = true;
      this.carousal = true;
      this.assignment8 = true;
    }
    else
    {
      this.assignment7 = true;
      this.assignments1 = true;
      this.carousal = false;
      this.assignments2 = true;
      this.assignment3 = true;
      this.assignment4 = true;
      this.assignment5 = true;
      this.assignment6 = true;
      this.assignment8 = true;
    }
}

Assignmnet8Switch()
{
  if(this.assignment8 == true)
    {
      this.assignment8 = false;
      this.assignments1 = true;
      this.assignments2 = true;
      this.assignment3 = true;
      this.assignment4 = true;
      this.assignment5 = true;
      this.carousal = true;
      this.assignment7 = true;
      this.assignment6 = true;
    }
    else
    {
      this.assignment8 = true;
      this.assignment6 = true;
      this.assignments1 = true;
      this.carousal = false;
      this.assignments2 = true;
      this.assignment3 = true;
      this.assignment4 = true;
      this.assignment5 = true;
      this.assignment7 = true;
    }
}

}
