import { TestBed } from '@angular/core/testing';

import { NavbarStateService } from './navbar-state.service';

describe('NavbarStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavbarStateService = TestBed.get(NavbarStateService);
    expect(service).toBeTruthy();
  });
});
