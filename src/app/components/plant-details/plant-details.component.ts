import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plant } from 'src/app/plant';
import {map} from "rxjs/operators";
import { Observable } from 'rxjs';

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.plant$ = this.route.params.pipe(
      map((params: any) => {
        return JSON.parse(localStorage.getItem(params['id']));
      })
    )
  }

}
