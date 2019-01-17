import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../../services/app-data.service';

import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { Application } from 'src/app/dynamic-form/models/application.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  selectedRegion = ''
  usaRegion = 'USA';
  appTittle = 'Apple Direct Customer Agreement.'
  thankYouMessage = 'Thank you for using this request tool to provide up-to-date <br> information of your account with Apple.';
  heroImage = 'assets/images/hero_image_new.png';

  constructor(
    private appDataService: AppDataService,
    private data: DataService,
    private router : Router
  ) {
    this.appDataService.getFormData(this.selectedRegion).subscribe(data=>{
      if(data){
        console.log(data);
        this.data.changeappData(Application.fromDtoToUi(data))
      }
    })
  
    
   }

  ngOnInit() {
  }

  onClick(event){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    this.selectedRegion = event.toElement.id ;
  //   this.appDataService.getFormData(this.selectedRegion).subscribe(((response: any) => {
  //     if(response){
  //       console.log(response);
  //      this.data.changeappData(Application.fromDtoToUi(response))
  //     }
  //    })
  //  );
      this.router.navigate(["./welcome"])
  }

}
