import { TestBed, async, inject } from '@angular/core/testing';

import { PostCanLoadGuard } from './post-can-load.guard';

describe('PostCanLoadGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostCanLoadGuard]
    });
  });

  it('should ...', inject([PostCanLoadGuard], (guard: PostCanLoadGuard) => {
    expect(guard).toBeTruthy();
  }));
});
