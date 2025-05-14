import { TestBed } from '@angular/core/testing';

import { ManageUnAuthUserService } from './manage-un-auth-user.service';

describe('ManageUnAuthUserService', () => {
  let service: ManageUnAuthUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageUnAuthUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
