import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Demo1Component } from '../demo1/demo1.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeComponent } from '../home/home.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { CareersComponent } from '../careers/careers.component';

@Component({
  selector: 'app-material-demo',
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTabsModule,
    HomeComponent,
    AboutusComponent,
    CareersComponent
  ],
  templateUrl: './material-demo.component.html',
  styleUrl: './material-demo.component.css'
})
export class MaterialDemoComponent {
  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(Demo1Component, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
