import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextaboutComponent } from './textabout.component';

describe('TextaboutComponent', () => {
  let component: TextaboutComponent;
  let fixture: ComponentFixture<TextaboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextaboutComponent]
    });
    fixture = TestBed.createComponent(TextaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
