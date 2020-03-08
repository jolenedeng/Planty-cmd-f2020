import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {API_KEY} from '../../../.secret';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private http: HttpClient) {
  }

  public getStateFromLatlng(lat: number, lng: number): Observable<any> {
    const url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lng + "&key="+API_KEY;
    return this.http.request("GET", url);
  }

}
