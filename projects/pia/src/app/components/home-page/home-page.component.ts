import { Component, OnInit } from '@angular/core';
import { VerifyService } from '../../services/verify.service';

import { DataService } from '../../data.service';
import { Router } from '@angular/router';

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
    private verifyService: VerifyService,
    private data: DataService,
    private router : Router
  ) {
    
   }

  ngOnInit() {
  }

  onVerify(event){

    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    this.selectedRegion = idAttr.nodeValue;
    
    this.verifyService.verifyUser(this.selectedRegion).subscribe(((response: any) => {
         if(response){
          this.data.changeVerifyUserData(response)
         }
        })
      );
      this.router.navigate(["./welcome"])

  }

}
