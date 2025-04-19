import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PermanentJobsComponent } from './components/permanent-jobs/permanent-jobs.component';
import { ContractJobsComponent } from './components/contract-jobs/contract-jobs.component';
import { adminGuard } from './guards/admin.guard';
import { hasChangesGuard } from './guards/has-changes.guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
    { 
        path: 'careers', 
        component: CareersComponent,
        children: [
            { path: 'permanent', component: PermanentJobsComponent },
            { path: 'contract', component: ContractJobsComponent }
        ]
    },
    { 
        path: 'contactus', 
        component: ContactsComponent,
        canDeactivate: [hasChangesGuard]
    },
    { path: 'users', component: UserListComponent },
    { path: 'userdetails/:id', component: UserDetailsComponent },
    { 
        path: 'products', 
        component: ProductListComponent,
        canActivate: [adminGuard]   // somebody can go to this page if and only if adminGuard return true
    },
    { path: 'productdetails', component: ProductDetailsComponent },
    { path: '', component: HomeComponent },  
    { path: '**', component: NotfoundComponent },
];
