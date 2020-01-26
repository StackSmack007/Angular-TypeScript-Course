import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCauseComponent } from './add-cause.component';

describe('AddCauseComponent', () => {
  let component: AddCauseComponent;
  let fixture: ComponentFixture<AddCauseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCauseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
