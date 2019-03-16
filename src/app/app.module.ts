import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelWeatherComponent } from './hotel-weather/hotel-weather.component';
import { HotelProfileComponent } from './hotel-profile/hotel-profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatButtonModule,MatIconModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HotelFavoriteComponent } from './hotel-favorite/hotel-favorite.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    HotelWeatherComponent,
    HotelProfileComponent,
    HeaderComponent,
    FooterComponent,
    HotelFavoriteComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    // MatButtonModule,
    // MatIconModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
