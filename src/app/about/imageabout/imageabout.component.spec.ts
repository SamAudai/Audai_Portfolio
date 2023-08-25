import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageaboutComponent } from './imageabout.component';

describe('ImageaboutComponent', () => {
  let component: ImageaboutComponent;
  let fixture: ComponentFixture<ImageaboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageaboutComponent]
    });
    fixture = TestBed.createComponent(ImageaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
