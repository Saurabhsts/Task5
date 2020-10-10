import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private $http: HttpClient) {}
  Api = 'https://vast-shore-74260.herokuapp.com/banks';

  Getdata(city: string): Observable<any> {
    let params = new HttpParams();
    params = params.set('city', city);
    return this.$http.get(this.Api, {params});
  }
}
