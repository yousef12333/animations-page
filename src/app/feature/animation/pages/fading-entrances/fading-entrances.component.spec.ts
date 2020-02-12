import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FadingEntrancesComponent } from './fading-entrances.component';

describe('FadingEntrancesComponent', () => {
  let component: FadingEntrancesComponent;
  let fixture: ComponentFixture<FadingEntrancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FadingEntrancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FadingEntrancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
