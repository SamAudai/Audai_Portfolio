import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubserviceComponent } from './subservice.component';

describe('SubserviceComponent', () => {
  let component: SubserviceComponent;
  let fixture: ComponentFixture<SubserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubserviceComponent]
    });
    fixture = TestBed.createComponent(SubserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
