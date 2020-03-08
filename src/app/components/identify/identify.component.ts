import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-identify',
  templateUrl: './identify.component.html',
  styleUrls: ['./identify.component.css', '../recommendation/recommendation.component.css']
})
export class IdentifyComponent {
  private imageUrl: string;

  constructor() {
  }

  public get getImageUrl(): string {
    return this.imageUrl;
  }

  public processFile(imageInput: any): void {
    if (imageInput.target.files && imageInput.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(imageInput.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
          this.imageUrl = <string> event.target.result;
      }
    }
  }

}
