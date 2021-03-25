import { Injectable } from '@angular/core';
import { map , catchError} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import {Observable} from "rxjs";
import {Camp} from "../shared/camp";
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class CampService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  getCamps(): Observable<Camp[]> {
    return this.http.get<Camp[]>(baseURL + 'camps')
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }

  getCamp(id: string): Observable<Camp> {
    return this.http.get<Camp>(baseURL + 'camps/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }

  getCampsIds(): Observable<number[] | any> {
    return this.getCamps().pipe(map(camps => camps.map(camp => camp.id)))
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }

  putCamp(camp: Camp): Observable<Camp> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Camp>(baseURL + 'camps/' , camp, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }
}
