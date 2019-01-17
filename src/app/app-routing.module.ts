import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationPageComponent } from './components/organization-page/organization-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { LocationInformationPageComponent } from './components/location-information-page/location-information-page.component';
import { ContactinfoPageComponent } from './components/contactinfo-page/contactinfo-page.component';

 let appRoutes:Routes = [
    { path: '', component: HomePageComponent },
    { path: 'welcome', component: WelcomePageComponent },
    { path: 'organization', component: OrganizationPageComponent },
    { path: 'locationInformation', component: LocationInformationPageComponent },
    { path: 'contactinfo', component: ContactinfoPageComponent}
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