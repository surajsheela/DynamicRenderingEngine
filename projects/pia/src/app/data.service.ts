import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';




@Injectable()
export class DataService {


    private pageDataChangeToSource = new BehaviorSubject({});

    currentAppData = this.pageDataChangeToSource.asObservable();


    changeVerifyUserData(appResponseData: any){
        this.pageDataChangeToSource.next(appResponseData);
      }

    getData() {
        return this.pageDataChangeToSource.getValue()
      }


  constructor(private http: HttpClient) { }

}
