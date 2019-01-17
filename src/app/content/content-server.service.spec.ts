import { TestBed } from '@angular/core/testing';

import { ContentServerService } from './content-server.service';

describe('ContentServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentServerService = TestBed.get(ContentServerService);
    expect(service).toBeTruthy();
  });
});
