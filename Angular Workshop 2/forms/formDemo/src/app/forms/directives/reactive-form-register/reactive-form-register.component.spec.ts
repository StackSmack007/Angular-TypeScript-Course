import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormRegisterComponent } from './reactive-form-register.component';

describe('ReactiveFormRegisterComponent', () => {
  let component: ReactiveFormRegisterComponent;
  let fixture: ComponentFixture<ReactiveFormRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
