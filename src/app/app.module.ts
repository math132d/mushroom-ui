import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BarComponent } from './bar/bar.component';
import { MushroomComponent } from './mushroom/mushroom.component';
import { AddMushroomComponent } from './add-mushroom/add-mushroom.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BarComponent,
    MushroomComponent,
    AddMushroomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
