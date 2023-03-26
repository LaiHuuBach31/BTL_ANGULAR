import { TestBed } from '@angular/core/testing';

import { AdminProService } from './admin-pro.service';

describe('AdminProService', () => {
  let service: AdminProService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminProService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
