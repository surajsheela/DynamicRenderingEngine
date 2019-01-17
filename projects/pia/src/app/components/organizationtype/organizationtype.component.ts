import { Component, OnInit } from '@angular/core';
import { VerifyService } from '../../services/verify.service';
import { DataService } from '../../data.service';
import { DynamicFormService } from '../../dynamic-form/services/dynamic-form.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {Application} from '../../dynamic-form/models/application.model';

@Component({
  selector: 'app-organizationtype',
  templateUrl: './organizationtype.component.html',
  styleUrls: ['./organizationtype.component.css']
})
export class OrganizationtypeComponent implements OnInit {

  payLoad = '';
  controls = [];
  sections = [];
  appData:Application;
  submittedData;
  form: FormGroup;

  constructor(private verifyService: VerifyService,
              private data: DataService,
              private dynamicFormService: DynamicFormService,
              private router : Router) { }

  ngOnInit() {
    // this.organisationService.getData().subscribe(
    //   data => {
    //     console.log(data);
    //   }
    // );

    // this.appData =  this.data.getData();
    // this.sections = this.appData.pages[2].sections;
    // for(let section of this.sections){
    //   for(let field of section.fields){
    //      this.controls.push(field);
    //   }
    // }
    // this.form = this.dynamicFormService.toFormGroup(this.controls);
    this.verifyService.getData().subscribe((appData: Application) => {
      this.getAppData(appData);
    });
  }

  getAppData(appData){
    this.sections = appData.pages[2].sections;
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
