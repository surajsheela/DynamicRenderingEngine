import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { AppComponent }  from './app.component';
import { Service } from './service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { OrganizationPageComponent } from './components/organization-page/organization-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { DataService } from './data.service';
import { FooterComponent } from './components/footer/footer.component';
import { ContactinfoPageComponent } from './components/contactinfo-page/contactinfo-page.component';
import { LocationInformationPageComponent } from './components/location-information-page/location-information-page.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    DynamicFormModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    OrganizationPageComponent,
    HomePageComponent,
    WelcomePageComponent,
    FooterComponent,
    ContactinfoPageComponent,
    LocationInformationPageComponent
  ],
  providers: [HttpClient,Service, DataService],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  ngOnInit() {
    console.log("test");
  }
 }