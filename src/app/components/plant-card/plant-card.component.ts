import { Component, OnInit, Input } from '@angular/core';
import { PlantImageService } from 'src/app/services/plant-image.service';
import { Plant } from 'src/app/plant';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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
    this.plantImageSrc$ = this._plantImageSerivce.getPlantImage(plant.commonName);
  }

  private _plant: Plant;

  public get plant(): Plant {
    return this._plant;
  }

  public plantImageSrc$: Observable<string>;

  constructor(private _plantImageSerivce: PlantImageService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  public navigateToDetails(): void {
    this._router.navigate([this.plant.scientificName]);
  }
}
