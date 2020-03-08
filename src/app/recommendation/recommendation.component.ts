import { Component } from "@angular/core";
import {} from "googlemaps";
import {LocationService} from './location.service';


@Component({
    selector: "recommendation",
    templateUrl: "./recommendation.component.ng.html"
})
/**
 * Container for recommendation page.
 */
export class RecommendationComponent {

  constructor(private locationService: LocationService) {}

  public findUser(): void {
    navigator.geolocation?.getCurrentPosition(((position: Position) => {
      this.showCurrentLocation(position);
    }));
  }
  public showCurrentLocation(position: Position): void {
    console.log("my location is " + position.coords.latitude + " " + position.coords.longitude);
    this.locationService.getStateFromLatlng(position.coords.latitude, position.coords.longitude);
  }

}
