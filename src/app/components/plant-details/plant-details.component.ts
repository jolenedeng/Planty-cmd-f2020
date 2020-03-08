import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plant } from 'src/app/plant';
import {map} from "rxjs/operators";
import { Observable } from 'rxjs';
import { isPresent } from 'src/app/commonFunctions';

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.css']
})
/**
 * Plant details page that gives more details about a plant.
 */
export class PlantDetailsComponent implements OnInit {
  public plant$: Observable<Plant>;

  public selectedImage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.plant$ = this.route.params.pipe(
      map((params: any) => {
        return JSON.parse(localStorage.getItem(params['id']));
      })
    );

    this.plant$.subscribe((plant: Plant) => this.selectedImage = plant.imageUrls[0]);
  }

  public hasAdaptableSoilTypes(plant: Plant): boolean {
    return isPresent(plant.isAdaptedToCoarseSoil) || isPresent(plant.isAdaptedToFineSoil) || isPresent(plant.isAdaptedToMediumSoil);
  }

  public selectImage(url: string): void {
    this.selectedImage = url;
  }
}
