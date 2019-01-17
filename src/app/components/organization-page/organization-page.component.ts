import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { DynamicFormService } from '../../dynamic-form/services/dynamic-form.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Application } from 'src/app/dynamic-form/models/application.model';

@Component({
  selector: 'app-organization-page',
  templateUrl: './organization-page.component.html',
  styleUrls: ['./organization-page.component.css']
})
export class OrganizationPageComponent implements OnInit {
  payLoad = '';
  controls = [];
  sections = [];
  appData : Application;
  submittedData;
  form: FormGroup;

  constructor(private data: DataService,
    private dynamicFormService: DynamicFormService,
    private router: Router) { }

  ngOnInit() {
    this.data.appData.subscribe((appData: Application) => {
      this.appData = appData;
      this.sections = this.appData.pages[1].section;
      for (let section of this.sections) {
        for (let field of section.fields) {
          this.controls.push(field);
        }
      }
      this.form = this.dynamicFormService.toFormGroup(this.controls);

    })
  }
  onSubmit() {
    this.submittedData = this.form.getRawValue();
    this.router.navigate(["./locationInformation"]);
  }

}
