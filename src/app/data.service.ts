import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Application } from './dynamic-form/models/application.model';




@Injectable()
export class DataService {


  private pageDataChangeToSource = new BehaviorSubject({});

  private appDataSource = new BehaviorSubject<Application>(new Application())




  appData = this.appDataSource.asObservable()
  currentAppData = this.pageDataChangeToSource.asObservable();
  
  changeappData(appData: Application) {
    this.appDataSource.next(appData)
  }
  getAppData(): Application {
    return this.appDataSource.getValue()
  }


  changeVerifyUserData(appResponseData: any) {
    this.pageDataChangeToSource.next(appResponseData);
  }

  getData() {
    return this.pageDataChangeToSource.getValue()
  }


  constructor(private http: HttpClient) { }

}
