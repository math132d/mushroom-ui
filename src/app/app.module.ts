import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BarComponent } from './bar/bar.component';
import { MushroomComponent } from './mushroom/mushroom.component';
import { AddMushroomComponent } from './add-mushroom/add-mushroom.component';
import { MushroomListItemComponent } from './mushroom-list-item/mushroom-list-item.component';
import { FamilyComponent } from './family/family.component';
import { GenusComponent } from './genus/genus.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BarComponent,
    MushroomComponent,
    AddMushroomComponent,
    MushroomListItemComponent,
    FamilyComponent,
    GenusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
