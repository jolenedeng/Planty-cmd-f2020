import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { API_KEY } from '../../../.secret';
import { Plant } from '../plant';
import { isPresent } from '../commonFunctions';

@Injectable({
    providedIn: 'root'
})
export class PlantImageService {
    constructor(private http: HttpClient) {

    }

    public getPlantImageForPlant(searchQuery: string, plant: Plant): Observable<string[]> {
        const url = "https://www.googleapis.com/customsearch/v1?key=" + API_KEY + "&q=" + searchQuery + "&cx=012931296608591275306:dwm4mzrongu&searchType=image";
        return this.http.get(url).pipe(
            map((json: any) => {
                if (Number(json.searchInformation.totalResults) > 0) {
                    const items: string[] = json.items.slice(0, 5).map((item: any) => item.link);
                    if (!isPresent(plant.imageUrls)) {
                        plant.imageUrls = items;
                        localStorage.setItem(plant.scientificName, JSON.stringify(plant));
                    }
                }
                return [];
            })
        );
    }
}
