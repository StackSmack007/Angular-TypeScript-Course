import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovCardComponent } from './mov-card.component';

describe('MovCardComponent', () => {
  let component: MovCardComponent;
  let fixture: ComponentFixture<MovCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
