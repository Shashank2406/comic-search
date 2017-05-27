/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthadminService } from './authadmin.service';

describe('AuthadminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthadminService]
    });
  });

  it('should ...', inject([AuthadminService], (service: AuthadminService) => {
    expect(service).toBeTruthy();
  }));
});
