import { Component, VERSION } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Service } from './service';
import { DynamicFormService } from './dynamic-form/services/dynamic-form.service';
import {interval} from "rxjs/internal/observable/interval";
import {startWith, switchMap} from "rxjs/operators";
import {VerifyService} from './services/verify.service';
import { Services } from '@angular/core/src/view';
import {Application} from './dynamic-form/models/application.model';
import {Page} from './dynamic-form/models/page.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Authorized Apple Reseller Application';
  isOn = true;
  submittedData;
  appData:Application;
  pages = [];
  form: FormGroup;
  payLoad = '';

  controls: any[];

  constructor(private verifyService:VerifyService,
              service: Service, private dynamicFormService: DynamicFormService) {

  }

  ngOnInit() {
    
    this.verifyService.getData().subscribe((appData: Application) => {
      this.getAppData(appData);
    });
      console.log(this.appData);
  }
  getAppData(appData){
    this.pages = appData.pages;
  }
  onSubmit() {
    this.submittedData = this.form.getRawValue();
  }
  goToContainer(selectedOption: number, channel: string) {

    this.isOn = !this.isOn;
  }
}
