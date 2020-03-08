import { Component } from "@angular/core";
import {} from "googlemaps";
import { LocationService } from 'src/app/services/location.service';
import { StatesLibrary } from 'src/app/services/statesLibrary';
import { USDAPlantApiService } from 'src/app/usdaplant-api.service';
import { Observable } from 'rxjs';
import { Plant } from 'src/app/plant';
import { tap } from "rxjs/operators"

@Component({
    selector: 'recommendation',
    templateUrl: './recommendation.component.ng.html',
    styleUrls: ['./recommendation.component.css']
})
/**
 * Container for recommendation page.
 */
export class RecommendationComponent {
  public plants$: Observable<Plant[]>;

  public savedPlants: Plant[];

  public currentState: string;

  constructor(private locationService: LocationService,
              private plantService: USDAPlantApiService) {
        const savedLocation: string = localStorage.getItem("location");
        if (savedLocation) {
          this.currentState = savedLocation;
          this.getPlants();
        }
  }

  public get getCurrentState(): string {
    return (this.currentState) ? this.currentState: "unknown location";
  }

  public findUser(): void {
    navigator.geolocation?.getCurrentPosition(((position: Position) => {
      this.showCurrentLocation(position);
    }));
  }

  public showCurrentLocation(position: Position): void {
    this.locationService.getStateFromLatlng(position.coords.latitude, position.coords.longitude).subscribe((res: any) => {
      if (res.status === "OK" && res.results.length > 0) {
        const found = res.results[0].address_components?.find((address) => {
          return Array.from(StatesLibrary.STATES.values()).indexOf(address.long_name) !== -1;
        });
        if (found) {
          this.currentState = found.short_name;
          localStorage.setItem("location", this.currentState);
        }
      }
    });
  }

  public getPlants(): void {
    this.plants$ = this.plantService.getNativePlants(this.currentState).pipe(
      tap((plants: Plant[]) => this.savedPlants = plants)
    );
  }
}
