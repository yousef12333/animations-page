import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightSpeedInComponent } from './light-speed-in.component';

describe('LightSpeedInComponent', () => {
  let component: LightSpeedInComponent;
  let fixture: ComponentFixture<LightSpeedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightSpeedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightSpeedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
