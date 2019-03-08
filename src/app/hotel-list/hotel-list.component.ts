import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css'],
})
export class HotelListComponent implements OnInit {
  @Input() public hotels: IHotel[];
  @Input() public currentHotel: IHotel;
  @Output() public hotel: EventEmitter<IHotel> = new EventEmitter();

  constructor() {
    
   }

  ngOnInit() { }

  public selectHotel(hotel: IHotel): void {
    this.hotel.emit(hotel);
  }

  
}
