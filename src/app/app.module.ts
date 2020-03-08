import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from "@clr/angular";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { GardenComponent } from './garden/garden.component';
import {HttpClientModule} from '@angular/common/http';
import {RecommendationComponent} from './recommendation/recommendation.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    GardenComponent,
    RecommendationComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
