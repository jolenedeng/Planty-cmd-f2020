import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {API_KEY} from '../../../.secret';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private http: HttpClient) {}

  public getStateFromLatlng(lat: number, lng: number): Observable<string> {
    this.http.request("GET", "https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key="+API_KEY)
      .subscribe((obj) => {
        console.log(obj);
      });
    return of("");
  }

}
