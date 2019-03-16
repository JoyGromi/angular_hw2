import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css'],
})
export class HotelListComponent {
  @Input() public hotels: IHotel[];
  @Input() public currentHotel: IHotel;
  @Input() public searchHotel: Text;
  @Input() public sortByStarAbc: boolean;
  @Input() public setStarHotel: string;
  
  @Output() public hotel: EventEmitter<IHotel> = new EventEmitter();
  public star: string;
 
  // @Output() public favor: EventEmitter<IHotel> = new EventEmitter();

  public selectHotel(hotel: IHotel): void {
    this.hotel.emit(hotel);
  }
  // public addFavorite(hotel: IHotel): void {
  //   this.favor.emit(hotel);
  //   // console.log('Hotel: ', this.hotel);
  //   // console.log('Favor: ', this.favor);
  // }
}
