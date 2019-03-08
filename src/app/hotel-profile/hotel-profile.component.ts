import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-profile',
  templateUrl: './hotel-profile.component.html',
  styleUrls: ['./hotel-profile.component.css']
})
export class HotelProfileComponent implements OnInit {

  @Input() public profile: IProfile;

  constructor() { }

  ngOnInit() {
  }

}
