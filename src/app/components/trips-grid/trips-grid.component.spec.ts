import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsGridComponent } from './trips-grid.component';

describe('TripsGridComponent', () => {
  let component: TripsGridComponent;
  let fixture: ComponentFixture<TripsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripsGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TripsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
