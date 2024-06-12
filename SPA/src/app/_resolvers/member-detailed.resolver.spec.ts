import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { memberDetailedResolver } from './member-detailed.resolver';

describe('memberDetailedResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => memberDetailedResolver(...resolverParameters) as unknown as boolean); // Cast the return value to boolean

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
