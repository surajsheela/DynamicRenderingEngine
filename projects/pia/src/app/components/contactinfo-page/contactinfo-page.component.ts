import { Component, OnInit } from '@angular/core';
import { VerifyService } from '../../services/verify.service';
import { DataService } from '../../data.service';
import { DynamicFormService } from '../../dynamic-form/services/dynamic-form.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {Application} from '../../dynamic-form/models/application.model';

@Component({
  selector: 'app-contactinfo-page',
  templateUrl: './contactinfo-page.component.html',
  styleUrls: ['./contactinfo-page.component.css']
})
export class ContactinfoPageComponent implements OnInit {

  payLoad = '';
  controls = [];
  sections = [];
  appData: Application;
  submittedData;
  form: FormGroup;

  constructor(private data: DataService,
              private dynamicFormService: DynamicFormService,
              private router : Router,
              private verifyService: VerifyService) { }

  ngOnInit() {
    this.verifyService.getData().subscribe((appData: Application) => {
      this.getAppData(appData);
    });
    // this.organisationService.getData().subscribe(
    //   data => {
    //     console.log(data);
    //   }
    // );

    // this.appData =  this.data.getData();
    // this.sections = this.appData.pages[3].sections;
    // for(let section of this.sections){
    //   for(let field of section.fields){
    //      this.controls.push(field);
    //   }
    // }
    // this.form = this.dynamicFormService.toFormGroup(this.controls);

  }

  getAppData(appData){
    this.sections = appData.pages[3].sections;
    for(let section of this.sections){
      for(let field of section.fields){
         this.controls.push(field);
      }
    }
    this.form = this.dynamicFormService.toFormGroup(this.controls);
  }
  test(){
    alert('testing')
  }
  onSubmit() {
    this.submittedData = this.form.getRawValue();
    this.router.navigate(["./organization"]);
  }

}
