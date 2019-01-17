import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationInformationPageComponent } from './location-information-page.component';

describe('LocationInformationPageComponent', () => {
  let component: LocationInformationPageComponent;
  let fixture: ComponentFixture<LocationInformationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationInformationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationInformationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
