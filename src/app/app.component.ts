import { Component, VERSION } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {Application} from './dynamic-form/models/application.model'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Authorized Apple Reseller Application';
  isOn = true;
  submittedData;
  appData:Application;

  form: FormGroup;
  payLoad = '';

  controls: any[];

  onSubmit() {
    this.submittedData = this.form.getRawValue();
  }
  goToContainer(selectedOption: number, channel: string) {

    this.isOn = !this.isOn;
  }
}
