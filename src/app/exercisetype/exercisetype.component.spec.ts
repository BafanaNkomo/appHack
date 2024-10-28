import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisetypeComponent } from './exercisetype.component';

describe('ExercisetypeComponent', () => {
  let component: ExercisetypeComponent;
  let fixture: ComponentFixture<ExercisetypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExercisetypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercisetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
