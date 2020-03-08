import { Component } from "@angular/core";
import {} from "googlemaps";
import {LocationService} from './location.service';
import {StatesLibrary} from './statesLibrary';


@Component({
    selector: 'recommendation',
    templateUrl: './recommendation.component.ng.html',
    styleUrls: ['./recommendation.component.css']
})
/**
 * Container for recommendation page.
 */
export class RecommendationComponent {
  private states: Map<string, string>;

  private currentState: string;

  constructor(private locationService: LocationService, stateLibrary: StatesLibrary) {
    this.states = stateLibrary.getStates();
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
          Array.from(this.states.values()).includes(address.long_name);
        });
        if (found) {
          this.currentState = found.long_name;
        }
      }
    });
  }

}
