import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpassengerComponent } from './listpassenger.component';

describe('ListpassengerComponent', () => {
  let component: ListpassengerComponent;
  let fixture: ComponentFixture<ListpassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpassengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
