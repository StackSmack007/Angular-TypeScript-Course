import { TestBed, async } from '@angular/core/testing';
import { ArtComponent } from './art.component';

describe('ArtComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArtComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ArtComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'articles-app'`, () => {
    const fixture = TestBed.createComponent(ArtComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('articles-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ArtComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('articles-app app is running!');
  });
});
