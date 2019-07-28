import { TestBed } from '@angular/core/testing';

import { CandidatesTableService } from './candidates-table.service';

describe('CandidatesTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidatesTableService = TestBed.get(CandidatesTableService);
    expect(service).toBeTruthy();
  });
});
