import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareerComponent } from './components/career/career.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UserListComponent } from './components/user-list/user-list.component';
 import { UserDetailsComponent } from './components/user-details/user-details.component';
 import { ProductListComponent } from './components/product-list/product-list.component';
 import { ProductDetailsComponent } from './components/product-details/product-details.component';
 import { PermenentJobsComponent } from './components/permenent-jobs/permenent-jobs.component'
 import { ContractJobsComponent } from './components/contract-jobs/contract-jobs.component';
 import { teacherGuard } from './guards/teacher.guard';
 import { haschangesGuard } from './guards/haschanges.guard';
import { ContactusComponent } from './components/contactus/contactus.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'careers', component: CareerComponent ,
        children: [
            { path: '', component: PermenentJobsComponent },
            { path: 'permanent', component: PermenentJobsComponent },
            { path: 'contract', component: ContractJobsComponent },
        ]
    },
    {
        path: 'contactus',
        component: ContactusComponent,
        canDeactivate: [haschangesGuard]
    },
    { path: '', component: HomeComponent },
    { path: '**', component: NotfoundComponent },
    { path: 'users', component: UserListComponent },
    { path: 'userdetails/:id', component: UserDetailsComponent },
    { path: 'products', component: ProductListComponent ,
        canActivate: [teacherGuard]
    },
    { path: 'productdetails', component: ProductDetailsComponent },
];
