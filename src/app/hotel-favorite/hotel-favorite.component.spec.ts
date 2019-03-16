import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelFavoriteComponent } from './hotel-favorite.component';

describe('HotelFavoriteComponent', () => {
  let component: HotelFavoriteComponent;
  let fixture: ComponentFixture<HotelFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
