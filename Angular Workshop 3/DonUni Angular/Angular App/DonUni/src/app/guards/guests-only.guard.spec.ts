import { TestBed, async, inject } from '@angular/core/testing';

import { GuestsOnlyGuard } from './guests-only.guard';

describe('GuestsOnlyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuestsOnlyGuard]
    });
  });

  it('should ...', inject([GuestsOnlyGuard], (guard: GuestsOnlyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
