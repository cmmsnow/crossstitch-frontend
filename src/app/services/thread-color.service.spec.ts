import { TestBed } from '@angular/core/testing';

import { ThreadColorService } from './thread-color.service';

describe('ThreadColorService', () => {
  let service: ThreadColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThreadColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
