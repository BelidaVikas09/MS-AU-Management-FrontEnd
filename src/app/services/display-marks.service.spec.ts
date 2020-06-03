import { TestBed } from '@angular/core/testing';

import { DisplayMarksService } from './display-marks.service';

describe('DisplayMarksService', () => {
  let service: DisplayMarksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayMarksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
