import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotels';

  public hotels: IHotel[] = [
    {
      id: 0,
      title: 'Universal Cabana',
      address: 'Orlando',
      description: 'Best one!',
      phone: '+3242353434',
      picture: 'assets/images/1.jpg',
      photos: [
        'assets/images/res.jpg',
        'assets/images/r1.jpg'
      ],
      weather:  {
        temperature: 12,
        wind: 11,
        icon: 'sun'
      },
      profile: {
        followers: 112,
        following: 11,
        photo: 'assets/images/b1.jpg'
      },
      stars: 3
    },
    {
      id: 1,
      title: 'Kharkov plaza',
      address: 'Kharkov',
      description: 'Five Stars',
      phone: '+3242353434',
      picture: 'assets/images/2.jpg',
      photos: [
        'assets/images/res.jpg',
        'assets/images/r1.jpg'
      ],
      weather:  {
        temperature: 5,
        wind: 4,
        icon: 'rain'
      },
      profile: {
        followers: 12,
        following: 111,
        photo: 'assets/images/b2.jpg'
      },
      stars: 4
    },
    {
      id: 2,
      title: 'Hotel name',
      address: 'Orlando',
      description: 'Lorem ipson0',
      phone: '+3242353434',
      picture: 'assets/images/3.jpg',
      photos: [
        'assets/images/res.jpg',
        'assets/images/r1.jpg'
      ],
      weather:  {
        temperature: -2,
        wind: 2,
        icon: 'cloud'
      },
      profile: {
        followers: 45,
        following: 78,
        photo: 'assets/images/b3.jpg'
      },
      stars: 5
    }
  ];
  public currentHotel: IHotel = this.hotels[0];

  public setHotel(hotel: IHotel): void {
    this.currentHotel = hotel;
  }
}
