import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {API_KEY} from '../../../.secret';

@Injectable({
    providedIn: 'root'
})
export class PlantImageService {
    constructor(private http: HttpClient) {

    }

    public getPlantImage(searchQuery: string): Observable<string> {
      const url = "https://www.googleapis.com/customsearch/v1?key="+API_KEY+"&q="+searchQuery+"&cx=012931296608591275306:dwm4mzrongu&searchType=image";
        return this.http.get(url).pipe(
            map((json: any) => {
                console.log(json);
                if (Number(json.searchInformation.totalResults) > 0) {
                  return json.items[0].link;
                }
                return "";
            })
        )

    }
}
