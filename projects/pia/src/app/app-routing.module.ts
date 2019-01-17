import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationPageComponent } from './components/organization-page/organization-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { DataService } from './data.service';
import {VerifyService} from './services/verify.service';
import { OrganizationtypeComponent } from './components/organizationtype/organizationtype.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactinfoPageComponent } from './components/contactinfo-page/contactinfo-page.component';
import {Application} from './dynamic-form/models/application.model';

 let appRoutes:Routes = [
    { path: '', component: WelcomePageComponent },
       { path: 'welcome', component: WelcomePageComponent },
      { path: 'organization', component: OrganizationPageComponent },
      { path: 'organizationtype', component: OrganizationtypeComponent },
      { path: 'contactinfo', component: ContactinfoPageComponent},
      { path: 'submitreview', component: OrganizationPageComponent},
      { path: 'addcomment', component: OrganizationtypeComponent}
    ];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
    ngOnInit() {
      console.log("test"+appRoutes);

    }
 }