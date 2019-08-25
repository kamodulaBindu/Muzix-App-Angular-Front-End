import { TestBed } from '@angular/core/testing';

import { TracksService } from './track.service';

describe('TrackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TracksService = TestBed.get(TracksService);
    expect(service).toBeTruthy();
  });
});
