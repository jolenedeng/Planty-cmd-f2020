import { Component, OnInit, Input } from '@angular/core';
import { PlantImageService } from 'src/app/services/plant-image.service';
import { Plant } from 'src/app/plant';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { map } from "rxjs/operators"
import { isPresent } from 'src/app/commonFunctions';

@Component({
  selector: 'app-plant-card',
  templateUrl: './plant-card.component.html',
  styleUrls: ['./plant-card.component.css']
})
/**
 * Plant card component that gives basic information about the plant.
 */
export class PlantCardComponent implements OnInit {
  /**
   * Plant to show summary for.
   */
  @Input() public set plant(plant: Plant) {
    this._plant = plant;
    // Retrieve images from stored data if we already queried them
    if (isPresent(plant.imageUrls)) {
      this.plantImageSrc$ = of(plant.imageUrls).pipe(
        map((images: string[]) => images[0])
      );
    } else {
      // Retrieve images from google api if we don't have them
      this.plantImageSrc$ = this._plantImageSerivce.getPlantImageForPlant(plant.commonName, plant).pipe(
        map((images: string[]) => images[0])
      );
    }
  }

  private _plant: Plant;

  public get plant(): Plant {
    return this._plant;
  }

  public plantImageSrc$: Observable<string>;

  constructor(private _plantImageService: PlantImageService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  public navigateToDetails(): void {
    this._router.navigate([this.plant.scientificName]);
  }
}
