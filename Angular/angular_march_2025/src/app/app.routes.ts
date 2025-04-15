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

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'careers', component: CareersComponent },
    { path: 'contactus', component: ContactsComponent },
    { path: 'users', component: UserListComponent },
    { path: 'userdetails/:id', component: UserDetailsComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'productdetails', component: ProductDetailsComponent },
    { path: '', component: HomeComponent },  
    { path: '**', component: NotfoundComponent },
];
