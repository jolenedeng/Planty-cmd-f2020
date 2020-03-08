import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from "@clr/angular";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { GardenComponent } from './garden/garden.component';
import { PlantCardComponent } from './plant-card/plant-card.component';
import { PlantDetailsComponent } from './plant-details/plant-details.component';
import { RecommendationComponent } from './recommendation/recommendation.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    GardenComponent,
    PlantCardComponent,
    PlantDetailsComponent,
    RecommendationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
