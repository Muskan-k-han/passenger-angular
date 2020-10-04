import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallpassengerComponent } from './viewallpassenger.component';

describe('ViewallpassengerComponent', () => {
  let component: ViewallpassengerComponent;
  let fixture: ComponentFixture<ViewallpassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallpassengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallpassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
