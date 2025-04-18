import { Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { UsersCrudComponent } from './components/users-crud/users-crud.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { UsersComponent } from './components/users/users.component';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { FulltimeJobsComponent } from './components/fulltime-jobs/fulltime-jobs.component';
import { ContractJobsComponent } from './components/contract-jobs/contract-jobs.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
	  { path: 'aboutus', component: AboutusComponent },
	  { 
        path: 'careers', 
        component: CareersComponent,
        children:[
            {path:'',component: FulltimeJobsComponent},
            {path:'fulltime-jobs',component: FulltimeJobsComponent},
            {path: 'contract-jobs',component: ContractJobsComponent}
        ]
     },
      { path: 'contactus', component: ContactusComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'users', component: UsersComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'userdetails', component: UsersDetailsComponent },
      {path: 'productdetails/:id', component: ProductDetailsComponent},
	  { path: '', component: HomeComponent },
	  { path: '**', component: NotfoundComponent },
];
