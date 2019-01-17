import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentPageComponent } from './present-page.component';

describe('PresentPageComponent', () => {
  let component: PresentPageComponent;
  let fixture: ComponentFixture<PresentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
