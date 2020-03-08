import { Component, OnInit, Input } from '@angular/core';

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
  @Input() public plant: any

  constructor() { }

  ngOnInit(): void {
  }

}
