import { TestBed } from '@angular/core/testing';

import { GithupFollowingService } from './githup-following.service';

describe('GithupFollowingService', () => {
  let service: GithupFollowingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithupFollowingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
