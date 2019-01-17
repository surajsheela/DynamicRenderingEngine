import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { DynamicFormService } from '../../dynamic-form/services/dynamic-form.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Application } from '../../dynamic-form/models/application.model'

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  appData: Application;
  controls = [];
  sections = [];
  form: FormGroup;

  constructor(private data: DataService,
    private dynamicFormService: DynamicFormService,
    private router: Router) { }

  ngOnInit() {
    this.data.appData.subscribe((appData: Application) => {
      this.appData = appData;
      console.log(this.appData)
      this.sections = this.appData.pages[0].section;
      for (let section of this.sections) {
        for (let field of section.fields) {
          this.controls.push(field);
        }
      }
      this.form = this.dynamicFormService.toFormGroup(this.controls);
    }) 

  }
  
  onSubmit(form) {
    this.router.navigate(["./organization"]);
  }

}
