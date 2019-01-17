import { Injectable } from '@angular/core';

import { DropdownInput } from './dynamic-form/models/dropdown-input.model';
import { CheckboxInput } from './dynamic-form/models/checkbox-input.model';
import { BaseModel } from './dynamic-form/models/base.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Service {
  constructor(private http: HttpClient) { }

  getData(): Observable<Array<any>> {
    return this.http.get<Array<any>>('../../assets/data/organisation.json');
  }
//   getQuestions() {

//     let questions: BaseModel<any>[] = [

// new DropdownInput({
//   key: 'entitytype',
//   label: 'Entity Type:',
//   options: [{key:"business","value": "Business/Enterprise"},
//         {key:"education",value: "Education Institution"},
//         {key:"state",value: "State/Local Government"},
//         {key:"agency",value: "U.S. Government Agency"},
//         {key:"systems",value: "Systems Integrator"}],
//   order: 1
// }),

// new DropdownInput({
//   key: 'businesstype',
//   label: 'Business Type:',
//   options: [{key:"sole",value: "Sole Proprietorship"},
//         {key:"partnership",value: "Partnership"},
//         {key:"state",value: "State/Local Government"},
//         {key:"corporation",value: "Corporation/S-Corportation"},
//         {key:"llc",value: "Limited Liability Corp(LLC)"},
//         {key:"other",value: "Other"}],
//   showWhen: {
//     key: "entitytype", 
//     value: "business"
//   },
//   order: 2
// }),
// new DropdownInput({
//   key: 'organisationtype',
//   label: 'Organisation Type:',
//   options: [
//     { key: 'public', value: 'Public' },
//     { key: 'private', value: 'Private' },
//     { key: 'na', value: 'N/A' }
//   ],
//   showWhen: {
//     key: 'entitytype',
//     value: 'education',
//   },
//   order: 3
// }),
// new DropdownInput({
//   key: 'exempt',
//   label: 'Exempt from State and Local Sales Tax::',
//   options: [
//     { key: 'yes', value: 'Yes' },
//     { key: 'no', value: 'No' },
//     { key: 'na', value: 'N/A (No Sales Tax State' }
//   ],
//   showWhen: {
//     key: 'businesstype',
//     value: 'partnership',
//   },
//   order: 3
// }),
//     ];

//     return questions.sort((a, b) => a.order - b.order);
//   }
}
