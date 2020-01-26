import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauseMiniComponent } from './cause-mini.component';

describe('CauseMiniComponent', () => {
  let component: CauseMiniComponent;
  let fixture: ComponentFixture<CauseMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauseMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauseMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
