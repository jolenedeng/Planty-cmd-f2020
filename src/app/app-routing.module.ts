import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { GardenComponent } from './components/garden/garden.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PlantDetailsComponent } from './components/plant-details/plant-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'recommendation',
    component: RecommendationComponent
  },
  {
    path: 'garden',
    component: GardenComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: ':id',
    component: PlantDetailsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
