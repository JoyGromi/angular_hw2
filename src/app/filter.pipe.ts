import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(hotels: IHotel[], searchHotel: string, sortStar: boolean, setStar: string): any {
    if (!searchHotel) {
      return this.sortStar(hotels, sortStar);
    }
    // TODO search on field title & description
    const filterHotel: IHotel[] =
      setStar === 'all' ?
        hotels.filter((hotel: IHotel) => {
          return `${hotel.title.toLocaleLowerCase()}${hotel.description.toLocaleLowerCase()}`
            .includes(searchHotel.toLocaleLowerCase());
        }):
        hotels.filter((hotel: IHotel) => {
          return `${hotel.title.toLocaleLowerCase()}${hotel.description.toLocaleLowerCase()}`
            .includes(searchHotel.toLocaleLowerCase()) && hotel.stars == parseInt(setStar);
        });
     
    return this.sortStar(filterHotel, sortStar);
    
  }
  private sortStar(hotel: IHotel[], sortStar: boolean): IHotel[]{
    return hotel.sort((a: IHotel, b: IHotel) => {
      if (sortStar) {
        return a.stars - b.stars;
      }
      return b.stars - a.stars;
    });
  }

}
