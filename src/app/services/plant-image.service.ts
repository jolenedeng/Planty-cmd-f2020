import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { TREFLE_ACCESS_TOKEN } from '.secret';

@Injectable({
    providedIn: 'root'
})
export class PlantImageService {
    constructor(private http: HttpClient) {
        
    }

    public getPlantImage(searchQuery: string): Observable<string> {
        return this.http.get(`https://trefle.io/api/plants?complete_data=true&token=${TREFLE_ACCESS_TOKEN}&q=${searchQuery}`).pipe(
            switchMap((json: any[]) => {
                console.log(json);
                return this.http.get(`https://trefle.io/api/plants?#${json[0].id}&token=${TREFLE_ACCESS_TOKEN}`);
            }),
            map((json: any) => {
                console.log(json);
                return json;
            })
        )
    }
}