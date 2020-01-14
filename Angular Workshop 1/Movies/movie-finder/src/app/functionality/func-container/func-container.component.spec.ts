import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncContainerComponent } from './func-container.component';

describe('FuncContainerComponent', () => {
  let component: FuncContainerComponent;
  let fixture: ComponentFixture<FuncContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
