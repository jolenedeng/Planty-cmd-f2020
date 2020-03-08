import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plant } from './plant';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class USDAPlantApiService {

  private plants: Observable<Plant[]>;

  usdaApiURL = 'https://plantsdb.xyz/search?limit=90'
  + '&fields=State_and_Province,Common_Name,Scientific_Name_x,Adapted_to_Coarse_Textured_Soils,Adapted_to_Coarse_Textured_Soils,'
  + 'Adapted_to_Coarse_Textured_Soils,Adapted_to_Medium_Textured_Soils,Adapted_to_Fine_Textured_Soils,Moisture_Use,Precipitation_Minimum,'
  + 'Precipitation_Maximum,Temperature_Minimum_F,Shade_Tolerance';

  constructor(private httpClient: HttpClient) { }

  getNativePlants(location: string): Observable<Plant[]> {
    this.plants = this.httpClient.get(this.usdaApiURL).pipe(
      map((res: any) => res.data.map(item => {
        return item as Plant;
      }))
    );
    // filter based on location and return the first 3 results
    return this.plants.pipe(
      map(plants => plants.filter(plant => this.isLocationValid(location, plant.provinceState))
      .slice(0, 3)),
      tap((plants: Plant[]) => {
        plants.forEach((plant: Plant) => localStorage.setItem(plant.scientificName, JSON.stringify(plant)));
      })
    );
  }

  isLocationValid(targetLocation: string, actualLocation: string): boolean {
    return actualLocation.includes(targetLocation);
  }
}
