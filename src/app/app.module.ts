import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { GardenComponent } from './components/garden/garden.component';
import { PlantCardComponent } from './components/plant-card/plant-card.component';
import { PlantDetailsComponent } from './components/plant-details/plant-details.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
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
