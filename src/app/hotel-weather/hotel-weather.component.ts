import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-weather',
  templateUrl: './hotel-weather.component.html',
  styleUrls: ['./hotel-weather.component.css']
})
export class HotelWeatherComponent implements OnInit {

  @Input() public weather: IWeather;

  constructor() { }

  ngOnInit() {
  }

}
