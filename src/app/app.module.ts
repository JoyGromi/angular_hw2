import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelWeatherComponent } from './hotel-weather/hotel-weather.component';
import { HotelProfileComponent } from './hotel-profile/hotel-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    HotelWeatherComponent,
    HotelProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
