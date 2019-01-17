import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  constructor(private http: HttpClient) { }
  getFormData(region: string){
    return this.http.get('../../assets/data/organisation.json');
}
 
    // return this.http.post('test', {
    // 	"region" : region
    // })
    // return this.http.get<Array<any>>('../../assets/data/organisation.json');
  

}
