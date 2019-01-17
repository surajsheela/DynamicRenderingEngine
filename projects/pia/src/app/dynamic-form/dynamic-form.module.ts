import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFormComponent }  from './dynamic-form.component';

import { DynamicFormService } from './services/dynamic-form.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    DynamicFormComponent
  ],
  providers: [DynamicFormService],
  exports: [
    DynamicFormComponent,
    ReactiveFormsModule
  ]
})
export class DynamicFormModule { }