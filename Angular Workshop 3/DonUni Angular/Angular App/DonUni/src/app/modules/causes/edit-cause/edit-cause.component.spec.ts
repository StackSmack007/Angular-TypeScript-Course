import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCauseComponent } from './edit-cause.component';

describe('EditCauseComponent', () => {
  let component: EditCauseComponent;
  let fixture: ComponentFixture<EditCauseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCauseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
