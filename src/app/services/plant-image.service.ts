import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class PlantImageService {
    constructor(private http: HttpClient) {

    }

    public getPlantImage(searchQuery: string): Observable<string> {
        return this.http.get(`https://serpapi.com/playground?q=${searchQuery}&tbm=isch`).pipe(
            map((json: any) => {
                console.log(json);
                return JSON.parse(json);
            })
        )

    }
}