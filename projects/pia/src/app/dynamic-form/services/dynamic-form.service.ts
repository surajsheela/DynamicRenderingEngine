import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { BaseModel } from '../models/base.model';

@Injectable()
export class DynamicFormService {
  constructor() { }

  toFormGroup(controls: BaseModel[] ) {
    let group: any = {};
    controls.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
