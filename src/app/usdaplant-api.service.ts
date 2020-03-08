import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plant } from './plant';
import { Observable } from 'rxjs';
import { map, tap, switchMap } from 'rxjs/operators';
import { PlantImageService } from './services/plant-image.service';

@Injectable({
  providedIn: 'root'
})
export class USDAPlantApiService {

  private plants: Observable<Plant[]>;

  usdaApiURL = 'https://plantsdb.xyz/search?limit=2000'
    + '&fields=State_and_Province,Common_Name,Scientific_Name_x,Adapted_to_Coarse_Textured_Soils,Adapted_to_Coarse_Textured_Soils,'
    + 'Adapted_to_Coarse_Textured_Soils,Adapted_to_Medium_Textured_Soils,Adapted_to_Fine_Textured_Soils,Moisture_Use,Precipitation_Minimum,'
    + 'Precipitation_Maximum,Temperature_Minimum_F,Shade_Tolerance';

  constructor(private httpClient: HttpClient) { }

  getNativePlants(location: string): Observable<Plant[]> {
    this.plants = this.httpClient.get(this.usdaApiURL).pipe(
      map((res: any) => res.data.map(item => {
        return {
          scientificName: item.Scientific_Name_x,
          commonName: item.Common_Name,
          provinceState: item.State_and_Province,
          isAdaptedToCoarseSoil: item.Adapted_to_Coarse_Textured_Soils,
          isAdaptedToMediumSoil: item.Adapted_to_Medium_Textured_Soils,
          moistureUse: item.Moisture_Use,
          precipitationMin: item.Precipitation_Minimum,
          precipitationMax: item.Precipitation_Maximum,
          shadeTolerance: item.Shade_Tolerance,
          temperatureMin: item.Temperature_Minimum_F
        };
      }))
    );

    // filter based on location and return the first 3 results

    return this.plants.pipe(
      map(plants => plants.filter(plant => this.isLocationValid(location, plant.provinceState))
        .slice(0, 2)),
      tap((plants: Plant[]) => {
        plants.forEach((plant: Plant) => localStorage.setItem(plant.scientificName, JSON.stringify(plant)));
      }),
      map((plants: Plant[]) => plants)
    );
  }

  isLocationValid(targetLocation: string, actualLocation: string): boolean {
    if (actualLocation === undefined || actualLocation === null || actualLocation === "") {
      return false;
    }
    return actualLocation.includes(targetLocation);
  }
}
