import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitalrecordsComponent } from './vitalrecords.component';

describe('VitalrecordsComponent', () => {
  let component: VitalrecordsComponent;
  let fixture: ComponentFixture<VitalrecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VitalrecordsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VitalrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
