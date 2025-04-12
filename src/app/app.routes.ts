import { Routes } from '@angular/router';
import { CareersComponent } from './components/careers/careers.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ContractJobsComponent } from './components/contract-jobs/contract-jobs.component';
import { PermanentJobsComponent } from './components/permanent-jobs/permanent-jobs.component';

export const routes: Routes = [
    { path: 'home' , component: HomeComponent},
    {path: 'aboutus' , component: AboutusComponent},

    {
        path: 'careers' ,
         component: CareersComponent,
         children: [
            { path:"contract-jobs", component: ContractJobsComponent},
            { path:"permanent-jobs", component: PermanentJobsComponent}
           ]
        },
    {path: 'contactus' , component: ContactusComponent},
    // {path: 'productdetails/:id', component: ProductDetailsComponent},
    {path: '' , component: HomeComponent},
    {path: '**', component: NotfoundComponent}
];
