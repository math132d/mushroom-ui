import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component'
import { MushroomComponent } from './mushroom/mushroom.component'


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'mushroom/:mushroomId', component: MushroomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
