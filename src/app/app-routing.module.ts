import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component'
import { MushroomComponent } from './mushroom/mushroom.component'
import { FamilyComponent } from './family/family.component'
import { GenusComponent } from './genus/genus.component'
import { AddMushroomComponent } from './add-mushroom/add-mushroom.component'


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'upload', component: AddMushroomComponent },
  { path: 'mushroom/:mushroomId', component: MushroomComponent },
  { path: 'family/:family', component: FamilyComponent },
  { path: 'genus/:genus', component: GenusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
