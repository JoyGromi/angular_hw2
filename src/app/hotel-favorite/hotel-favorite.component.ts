import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-favorite',
  templateUrl: './hotel-favorite.component.html',
  styleUrls: ['./hotel-favorite.component.css']
})


export class HotelFavoriteComponent {
  // @Input() public hotels: IHotel[];
  @Input() public favorHotel: IHotel[];

  // todo 

}
