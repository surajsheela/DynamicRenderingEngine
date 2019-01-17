import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactinfoPageComponent } from './contactinfo-page.component';

describe('ContactinfoPageComponent', () => {
  let component: ContactinfoPageComponent;
  let fixture: ComponentFixture<ContactinfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactinfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactinfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
