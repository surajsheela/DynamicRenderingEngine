import { Component, OnInit,Input } from '@angular/core';
import { DataService } from '../../data.service';
import { DynamicFormService } from '../../dynamic-form/services/dynamic-form.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {VerifyService} from '../../services/verify.service';
import {Application} from '../../dynamic-form/models/application.model'

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  //@Input() page;
  appData:Application;
  controls = [];
  sections = [];
  welcomeform: FormGroup;

  constructor(private data: DataService,
    private dynamicFormService: DynamicFormService,
    private router : Router,
    private verifyService:VerifyService) { }

  ngOnInit() {
    this.verifyService.getData().subscribe((appData: Application) => {
      this.getAppData(appData);
    });
    
  }
  getAppData(appData){
    //this.sections = appData.pages[(this.page.pageId)-1].sections;
    this.sections = appData.pages[0].sections;
    for(let section of this.sections){
      for(let field of section.fields){
         this.controls.push(field);
      }
    }
    this.welcomeform = this.dynamicFormService.toFormGroup(this.controls);
  }
  onSubmit(form){
    this.router.navigate(["./organization"]);
  }

}
